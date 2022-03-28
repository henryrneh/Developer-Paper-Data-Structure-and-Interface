from rest_framework import serializers
from dpl.models import Main, Qualitative, Quantitative, Independent_Variable, IV_Level, Dependent_Variable, DV_Level, Agreement, Author, AuthorID, Descriptive_Statics, Research_Questions, Study_Methods, Sample

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model=Main
        fields=('Main_ID', 'Paper_ID', 'Name', 'Research', 'Year')

class QualitativeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Qualitative
        fields=('Qualitative_ID', 'Paper_ID', 'Data_Analysis_Method')

class QuantitativeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Quantitative
        fields=('Quantitative_ID', 'Paper_ID', 'Analysis_Method', 'P_value_sign', 'P_value', 'OR', 'WU', 'T', 'Degrees_of_Freedom', 'xf2', 'R', 'df', 'CIl', 'CIr', 'Cor_P_sign', 'Cor_P')

class Independent_VariableSerializer(serializers.ModelSerializer):
    class Meta:
        model=Independent_Variable
        fields=('Independent_Variable_ID', 'Quantitative_ID', 'Is_categorical', 'IV_name', 'P_value_sign', 'P_value', 'CIl', 'CIr', 'Coef', 'Exp', 'OR', 'Estimates', 'SE', 'T', 'Degrees_of_Freedom', 'WU', 'xf2')

class IV_LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model=IV_Level
        fields=('IV_Level_ID', 'Independent_Variable_ID', 'Name', 'Is_baseline', 'P_value_sign', 'P_value', 'CIl', 'CIr', 'Coef', 'OR', 'Estimates', 'Exp', 'SE')

class Dependent_VariableSerializer(serializers.ModelSerializer):
    class Meta:
        model=Dependent_Variable
        fields=('Dependent_Variable_ID', 'Quantitative_ID', 'Is_categorical', 'DV_name')

class DV_LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model=DV_Level
        fields=('DV_Level_ID', 'Dependent_Variable_ID', 'Name')

class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model=Agreement
        fields=('Agreement_ID', 'Paper_ID', 'Agreement')

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Author
        fields=('Author_ID', 'Paper_ID', 'Author')

class AuthorIDSerializer(serializers.ModelSerializer):
    class Meta:
        model=AuthorID
        fields=('AuthorID_ID', 'Author')

class Descriptive_StaticsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Descriptive_Statics
        fields=('Descriptive_Statics_ID', 'Paper_ID', 'Descriptive_Statics')

class Research_QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Research_Questions
        fields=('Research_Questions_ID', 'Paper_ID', 'Research_Questions')

class Study_MethodsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Study_Methods
        fields=('Study_Methods_ID', 'Paper_ID', 'Study_Methods')

class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sample
        fields=('Sample_ID', 'Quantitative_ID', 'Qualitative_ID', 'Sample_Type', 'Sample_Size')


