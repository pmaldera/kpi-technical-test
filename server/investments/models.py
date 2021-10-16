from django.db import models
from django.db.models.base import Model

# Create your models here.

class Investment(models.Model):
    titreoperation = models.CharField(max_length=500)
    entreprise = models.CharField(max_length=255, null=True)
    annee_de_livraison = models.CharField(max_length=10, null=True)
    ville = models.CharField(max_length=255, null=True)
    mandataire = models.CharField(max_length=255, null=True)
    ppi = models.CharField(max_length=50, null=True)
    lycee = models.CharField(max_length=255, null=True)
    notification_du_marche = models.DateField(null=True)
    codeuai = models.CharField(max_length=255, null=True)
    longitude = models.FloatField(null=True)
    latitude = models.FloatField(null=True)
    etat_d_avancement = models.CharField(max_length=500, null=True)
    montant_des_ap_votes_en_meu = models.FloatField(null=True)
    cao_attribution = models.DateField(null=True)
    maitrise_d_oeuvre = models.CharField(max_length=255, null=True)
    mode_de_devolution = models.CharField(max_length=255, null=True)
    annee_d_individualisation = models.CharField(max_length=10, null=True)
    enveloppe_prev_en_meu = models.FloatField(null=True)