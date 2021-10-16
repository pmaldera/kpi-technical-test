import { useState, useEffect, useCallback } from 'react';
import {RouteComponentProps} from "@reach/router"
import { Investment, getInvestmentById} from '../../services/investementsService';
import './Investment.css';

interface IInvestmentState {
  data: Investment | undefined
}

interface InvestmentProps extends RouteComponentProps {
  investmentId?: string
}

function List(props: InvestmentProps) {
  const [state, setState] = useState<IInvestmentState>({
    data: undefined,
  });

  const loadData = () => {
    getInvestmentById(parseInt(props.investmentId||'1')).then(
      results => {
        setState({...state, data: results});
      }
    )
  }


  const handleDataLoad = useCallback(() => {
    loadData();
  }, [])

  useEffect(() => {
    handleDataLoad();
  },[])

  return (
    <div className="investment">
      <h2>{state.data?.titreoperation} à {state.data?.ville}</h2>
        <div className="attributes">
          {Object.keys(state.data || {}).map(attribute => {
            //@ts-ignore
            return (attribute!== "titreoperation" ?  <p><b>{attribute}:</b> {String(state.data[attribute])}</p> : null)
          })}
        </div>
    </div>
  );
}

export default List;
