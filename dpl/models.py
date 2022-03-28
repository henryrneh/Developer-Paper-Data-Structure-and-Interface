from cmath import nan
from pyexpat import model
from django.db import models

# Create your models here.

class Main(models.Model):
    Main_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0)
    Name = models.CharField(max_length=100, default="", null=True)
    Research = models.CharField(max_length=100, default="", null=True)
    Year = models.IntegerField(default=0, null=True)
    class Meta:
        db_table = "Main"

class Qualitative(models.Model):
    Qualitative_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Data_Analysis_Method = models.CharField(max_length=100, default=0, null=True)
    class Meta:
        db_table = "Qualitative"

class Quantitative(models.Model):
    Quantitative_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Analysis_Method = models.CharField(max_length=100, default="", null=True)
    P_value_sign = models.CharField(max_length=100, default="", null=True)
    P_value = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    OR = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    WU = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    T = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Degrees_of_Freedom = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    xf2 = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    R = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    df = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIl = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIr = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Cor_P_sign = models.CharField(max_length=100, default="", null=True)
    Cor_P = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    class Meta:
        db_table = "Quantitative"

class Independent_Variable(models.Model):
    Independent_Variable_ID = models.IntegerField(primary_key=True)
    Quantitative_ID = models.IntegerField(default=0, null=True)
    Is_categorical = models.BooleanField(default=0, null=True)
    IV_name = models.CharField(max_length=100, default="", null=True)
    P_value_sign = models.CharField(max_length=100, default="", null=True)
    P_value = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIl = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIr = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Coef = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Exp = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    OR = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Estimates = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    SE = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    T = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Degrees_of_Freedom = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    WU = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    xf2 = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    class Meta:
        db_table = "Independent_Variable"

class IV_Level(models.Model):
    IV_Level_ID = models.IntegerField(primary_key=True)
    Independent_Variable_ID = models.IntegerField(default=0, null=True)
    Name = models.CharField(max_length=100, default="", null=True)
    Is_baseline = models.BooleanField(default=0, null=True)
    P_value_sign = models.CharField(max_length=100, default="", null=True)
    P_value = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIl = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    CIr = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Coef = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    OR = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Estimates = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    Exp = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    SE = models.DecimalField(max_digits=13, decimal_places=4, default=0, null=True)
    class Meta:
        db_table = "IV_Level"

class Dependent_Variable(models.Model):
    Dependent_Variable_ID = models.IntegerField(primary_key=True)
    Quantitative_ID = models.IntegerField(default=0, null=True)
    Is_categorical = models.BooleanField(default=0, null=True)
    DV_name = models.CharField(max_length=100, default="", null=True)
    class Meta:
        db_table = "Dependent_Variable" 

class DV_Level(models.Model):
    DV_Level_ID = models.IntegerField(primary_key=True)
    Dependent_Variable_ID = models.IntegerField(default=0, null=True)
    Name = models.CharField(max_length=100, default="", null=True)
    class Meta:
        db_table = "DV_Level"

class Agreement(models.Model):
    Agreement_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Agreement = models.CharField(max_length=500, default="", null=True)
    class Meta:
        db_table = "Agreement"

class Author(models.Model):
    Author_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Author = models.IntegerField(default=0, null=True)
    class Meta:
        db_table = "Author"

class AuthorID(models.Model):
    AuthorID_ID = models.IntegerField(primary_key=True)
    Author = models.CharField(max_length=100, default="", null=True)
    class Meta:
        db_table = "AuthorID" 

class Descriptive_Statics(models.Model):
    Descriptive_Statics_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Descriptive_Statics = models.CharField(max_length=500, default="", null=True)
    class Meta:
        db_table = "Descriptive_Statics" 

class Research_Questions(models.Model):
    Research_Questions_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Research_Questions = models.CharField(max_length=500, default="", null=True)
    class Meta:
        db_table = "Research_Questions"

class Study_Methods(models.Model):
    Study_Methods_ID = models.IntegerField(primary_key=True)
    Paper_ID = models.IntegerField(default=0, null=True)
    Study_Methods = models.CharField(max_length=500, default="", null=True)
    class Meta:
        db_table = "Study_Methods"

class Sample(models.Model):
    Sample_ID = models.IntegerField(primary_key=True)
    Quantitative_ID = models.IntegerField(default=0, null=True)
    Qualitative_ID = models.IntegerField(default=0, null=True)
    Sample_Type = models.CharField(max_length=100, default="", null=True)
    Sample_Size = models.IntegerField(default=0, null=True)
    class Meta:
        db_table = "Sample"