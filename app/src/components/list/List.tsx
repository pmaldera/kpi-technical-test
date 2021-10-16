import { useState, useEffect, useCallback } from 'react';
import {RouteComponentProps, Link} from "@reach/router"
import { InvestmentsFilter, getInvestments, Investment, getInvestmentsFilterValues, InvestmentsFilterData } from '../../services/investementsService';
import Chart from "react-google-charts";
import './List.css';

interface IListState {
  filter: InvestmentsFilter,
  filterData: InvestmentsFilterData,
  data: Array<Investment>
}

function List(props: RouteComponentProps) {
  const [state, setState] = useState<IListState>({
    filter: {
      'ville': '',
      'etat_d_avancement': ''
    },
    filterData: {
      'ville': [],
      'etat_d_avancement': []
    },
    data: [],
  });

  const filter = () => {
    getInvestments(state.filter).then(
      results => {
        setState({...state , 'data': results})
        //@ts-ignore
        console.log(JSON.stringify([['test','test'],...state.data.map(i => [i.lycee, parseFloat(i.enveloppe_prev_en_meu)])]));
      }
    );
  }

  const loadFilterData = () => {
    getInvestmentsFilterValues().then(
      results => {
        let currentFilters = {...state.filterData};
        console.log(currentFilters);
        currentFilters['ville'] = results.ville;
        currentFilters['etat_d_avancement'] = results.etat_d_avancement;
        setState({...state, filterData: currentFilters});
      }
    )
  }

  const filterValueChangeHandler = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    let currentFilters = {...state.filter};
    currentFilters[e.target.name] = e.target.value;
    setState({...state, filter: currentFilters});
  }

  const handleFilterDataLoad = useCallback(() => {
    loadFilterData();
  }, [])

useEffect(() => {
  handleFilterDataLoad();

},
  []
)

  return (
    <div className="list">
      <h1>Investissements ville de Paris</h1>
      {
        state.data.length > 0 ?
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          //@ts-ignore
          data={[['test','test'],...state.data.map(i => [i.lycee, parseFloat(i.enveloppe_prev_en_meu)])]}
          options={{
            title: 'Répartition des enveloppes (en meu)',
          }}
          rootProps={{ 'data-testid': '1' }}
        /> : null
      }
      <div className="filter-bar">
        <select name="ville" value={state.filter.ville} onChange={filterValueChangeHandler}>
          <option key={'Toutes les villes'} value="">Toutes les villes</option>
          {
              state.filterData.ville.map(v => {
                  return <option key={v} value={v}>{v}</option>
              })
          }
        </select>
        <select name="etat_d_avancement" value={state.filter.etat_d_avancement} onChange={filterValueChangeHandler}>
          <option key={"Tous les états d'avancement"} value="">Tous les états d'avancement</option>
          {
              state.filterData.etat_d_avancement.map(e => {
                  return <option key={e} value={e}>{e}</option>
              })
          }
        </select>
        <button onClick={filter}>Chercher/Filtrer</button>
      </div>
      {state.data.length > 0 ? <table>
        <thead>
          
          <tr>
            <td>Identifiant</td>
            <td>Titre d'opération</td>
            <td>Ville</td>
            <td>Lycée</td>
            <td>Etat d'avancement</td>
          </tr>
        </thead>
        <tbody>
          {
            state.data.map(investment => {
              return (<tr>
                <td>{investment.id}</td>
                <td><Link to={`/investment/${investment.id}`}>{investment.titreoperation}</Link></td>
                <td>{investment.ville}</td>
                <td>{investment.lycee}</td>
                <td>{investment.etat_d_avancement}</td>
              </tr>);
            })
          }
        </tbody>
      </table> : <p>Merci d'effectuer une recherche.</p>}
    </div>
  );
}

export default List;
