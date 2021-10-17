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