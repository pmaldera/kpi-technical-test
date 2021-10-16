import json
import os

from django.db import migrations

def import_investments(apps, schema_editor):
    Investment = apps.get_model('investments', 'Investment')
    with open('kpitest/data_import/dataset.json', 'r', encoding='utf-8') as investments_file:
        investments_data = investments_file.read()

    investments_array = json.loads(investments_data)
    for investment_obj in investments_array:
        Investment.objects.create(
            titreoperation=investment_obj.get('titreoperation'),
            entreprise=investment_obj.get('entreprise'),
            annee_de_livraison=investment_obj.get('annee_de_livraison'),
            ville=investment_obj.get('ville'),
            mandataire=investment_obj.get('mandataire'),
            ppi=investment_obj.get('ppi'),
            lycee=investment_obj.get('lycee'),
            notification_du_marche=investment_obj.get('notification_du_marche'),
            codeuai=investment_obj.get('codeuai'),
            longitude=investment_obj.get('longitude'),
            latitude=investment_obj.get('latitude'),
            etat_d_avancement=investment_obj.get('etat_d_avancement'),
            montant_des_ap_votes_en_meu=investment_obj.get('montant_des_ap_votes_en_meu'),
            cao_attribution=investment_obj.get('cao_attribution'),
            maitrise_d_oeuvre=investment_obj.get('maitrise_d_oeuvre'),
            mode_de_devolution=investment_obj.get('mode_de_devolution'),
            annee_d_individualisation=investment_obj.get('annee_d_individualisation'),
            enveloppe_prev_en_meu=investment_obj.get('enveloppe_prev_en_meu')
        )



class Migration(migrations.Migration):

    dependencies = [
        ('investments', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(import_investments)
    ]
