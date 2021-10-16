import { CONFIG } from "../config/config";

export type Investment = {
    id: number,
    titreoperation?: string,
    entreprise?: string,
    annee_de_livraison?: string,
    ville?: string,
    mandataire?: string,
    ppi?: string,
    lycee?: string,
    notification_du_marche?: string,
    codeuai?: string,
    longitude?: number,
    etat_d_avancement?: string,
    montant_des_ap_votes_en_meu?: number,
    cao_attribution?: string,
    latitude?: number,
    maitrise_d_oeuvre?: string,
    mode_de_devolution?: string,
    annee_d_individualisation?: string,
    enveloppe_prev_en_meu?: number
}

export type InvestmentsFilter = {
    [ville: string]: string,
    etat_d_avancement: string
};

export type InvestmentsFilterData = {
    [ville: string]: Array<string>,
    etat_d_avancement: Array<string>
};

export async function getInvestments(filter:InvestmentsFilter): Promise<Array<Investment>> {
    let url = `/investments/`;
    let added = false;
    for (const key in filter) {
        if(filter[key])
            if(!added) {
                url += `?${key}=${filter[key]}`;
                added = true;
            } else {
                url += `&${key}=${filter[key]}`;
            }
    }
    const response = await fetch(
        url.toString(),
        {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    if (response.status === 200) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        console.error(response);
        throw Error("Impossible de charger les investissements");
    }
}

export async function getInvestmentById(id: number) {
    let response = await fetch(
        `/investments/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    if (response.status === 200) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        throw Error(`Impossible de charger l'investisement ${id}.`);
    }
}

export async function getInvestmentsFilterValues() {
    let response = await fetch(
        `/investments/filter-values`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    if (response.status === 200) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        throw Error(`Impossible de charger les filtres des investissements.`);
    }
}

