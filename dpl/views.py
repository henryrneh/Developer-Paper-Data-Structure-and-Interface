from http.client import REQUESTED_RANGE_NOT_SATISFIABLE
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from dpl.models import Main, Qualitative, Quantitative, Independent_Variable, IV_Level, Dependent_Variable, DV_Level, Agreement, Author, AuthorID, Descriptive_Statics, Research_Questions, Study_Methods, Sample
from dpl.serializers import DV_LevelSerializer, MainSerializer, QualitativeSerializer, QuantitativeSerializer, Independent_VariableSerializer, IV_LevelSerializer, Dependent_VariableSerializer, DV_LevelSerializer, AgreementSerializer, AuthorSerializer, AuthorIDSerializer, Descriptive_StaticsSerializer, Research_QuestionsSerializer, Study_MethodsSerializer, SampleSerializer

@csrf_exempt
def MainApi(request, id=0):
    if request.method=='GET':
        main = Main.objects.all()
        main_serializer=MainSerializer(main,many=True)
        return JsonResponse(main_serializer.data,safe=False)
    elif request.method=='POST':
        main_data=JSONParser().parse(request)
        main_serializer=MainSerializer(data=main_data)
        if main_serializer.is_valid():
            main_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        main_data=JSONParser().parse(request)
        main = Main.objects.get(Main_ID=main_data['Main_ID'])
        main_serializer=MainSerializer(main,data=main_data)
        if main_serializer.is_valid():
            main_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        main = Main.objects.get(Main_ID=id)
        main.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def QualitativeApi(request, id=0):
    if request.method=='GET':
        qualitative = Qualitative.objects.all()
        qualitative_serializer=QualitativeSerializer(qualitative,many=True)
        return JsonResponse(qualitative_serializer.data,safe=False)
    elif request.method=='POST':
        qualitative_data=JSONParser().parse(request)
        qualitative_serializer=QualitativeSerializer(data=qualitative_data)
        if qualitative_serializer.is_valid():
            qualitative_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        qualitative_data=JSONParser().parse(request)
        qualitative=Qualitative.objects.get(Qualitative_ID=qualitative_data['Qualitative_ID'])
        qualitative_serializer=QualitativeSerializer(qualitative,data=qualitative_data)
        if qualitative_serializer.is_valid():
            qualitative_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        qualitative=Qualitative.objects.get(Qualitative_ID=id)
        qualitative.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def QuantitativeApi(request, id=0):
    if request.method=='GET':
        quantitative = Quantitative.objects.all()
        quantitative_serializer=QuantitativeSerializer(quantitative,many=True)
        return JsonResponse(quantitative_serializer.data,safe=False)
    elif request.method=='POST':
        quantitative_data=JSONParser().parse(request)
        quantitative_serializer=QuantitativeSerializer(data=quantitative_data)
        if quantitative_serializer.is_valid():
            quantitative_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        quantitative_data=JSONParser().parse(request)
        quantitative=Quantitative.objects.get(Quantitative_ID=quantitative_data['Quantitative_ID'])
        quantitative_serializer=QuantitativeSerializer(quantitative,data=quantitative_data)
        if quantitative_serializer.is_valid():
            quantitative_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        quantitative=Quantitative.objects.get(Quantitative_ID=id)
        quantitative.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Independent_VariableApi(request, id=0):
    if request.method=='GET':
        independent_variable = Independent_Variable.objects.all()
        independent_variable_serializer=Independent_VariableSerializer(independent_variable,many=True)
        return JsonResponse(independent_variable_serializer.data,safe=False)
    elif request.method=='POST':
        independent_variable_data=JSONParser().parse(request)
        independent_variable_serializer=Independent_VariableSerializer(data=independent_variable_data)
        if independent_variable_serializer.is_valid():
            independent_variable_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        independent_variable_data=JSONParser().parse(request)
        independent_variable=Independent_Variable.objects.get(Independent_Variable_ID=independent_variable_data['Independent_Variable_ID'])
        independent_variable_serializer=Independent_VariableSerializer(independent_variable,data=independent_variable_data)
        if independent_variable_serializer.is_valid():
            independent_variable_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        independent_variable=Independent_Variable.objects.get(Independent_Variable_ID=id)
        independent_variable.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def IV_LevelApi(request, id=0):
    if request.method=='GET':
        iv_level = IV_Level.objects.all()
        iv_level_serializer=IV_LevelSerializer(iv_level,many=True)
        return JsonResponse(iv_level_serializer.data,safe=False)
    elif request.method=='POST':
        iv_level_data=JSONParser().parse(request)
        iv_level_serializer=IV_LevelSerializer(data=iv_level_data)
        if iv_level_serializer.is_valid():
            iv_level_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        iv_level_data=JSONParser().parse(request)
        iv_level=IV_Level.objects.get(IV_Level_ID=iv_level_data['IV_Level_ID'])
        iv_level_serializer=IV_LevelSerializer(iv_level,data=iv_level_data)
        if iv_level_serializer.is_valid():
            iv_level_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        iv_level=IV_Level.objects.get(IV_Level_ID=id)
        iv_level.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Dependent_VariableApi(request, id=0):
    if request.method=='GET':
        dependent_variable = Dependent_Variable.objects.all()
        dependent_variable_serializer=Dependent_VariableSerializer(dependent_variable,many=True)
        return JsonResponse(dependent_variable_serializer.data,safe=False)
    elif request.method=='POST':
        dependent_variable_data=JSONParser().parse(request)
        dependent_variable_serializer=Dependent_VariableSerializer(data=dependent_variable_data)
        if dependent_variable_serializer.is_valid():
            dependent_variable_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        dependent_variable_data=JSONParser().parse(request)
        dependent_variable=Dependent_Variable.objects.get(Dependent_Variable_ID=dependent_variable_data['Dependent_Variable_ID'])
        dependent_variable_serializer=Dependent_VariableSerializer(dependent_variable,data=dependent_variable_data)
        if dependent_variable_serializer.is_valid():
            dependent_variable_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        dependent_variable=Dependent_Variable.objects.get(Dependent_Variable_ID=id)
        dependent_variable.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def DV_LevelApi(request, id=0):
    if request.method=='GET':
        dv_level = DV_Level.objects.all()
        dv_level_serializer=DV_LevelSerializer(dv_level,many=True)
        return JsonResponse(dv_level_serializer.data,safe=False)
    elif request.method=='POST':
        dv_level_data=JSONParser().parse(request)
        dv_level_serializer=DV_LevelSerializer(data=dv_level_data)
        if dv_level_serializer.is_valid():
            dv_level_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        dv_level_data=JSONParser().parse(request)
        dv_level=DV_Level.objects.get(DV_Level_ID=dv_level_data['DV_Level_ID'])
        dv_level_serializer=DV_LevelSerializer(dv_level,data=dv_level_data)
        if dv_level_serializer.is_valid():
            dv_level_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        dv_level=DV_Level.objects.get(DV_Level_ID=id)
        dv_level.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def AgreementApi(request, id=0):
    if request.method=='GET':
        agreement = Agreement.objects.all()
        agreement_serializer=AgreementSerializer(agreement,many=True)
        return JsonResponse(agreement_serializer.data,safe=False)
    elif request.method=='POST':
        agreement_data=JSONParser().parse(request)
        agreement_serializer=AgreementSerializer(data=agreement_data)
        if agreement_serializer.is_valid():
            agreement_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        agreement_data=JSONParser().parse(request)
        agreement=Agreement.objects.get(Agreement_ID=agreement_data['Agreement_ID'])
        agreement_serializer=AgreementSerializer(agreement,data=agreement_data)
        if agreement_serializer.is_valid():
            agreement_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        agreement=Agreement.objects.get(Agreement_ID=id)
        agreement.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def AuthorApi(request, id=0):
    if request.method=='GET':
        author = Author.objects.all()
        author_serializer=AuthorSerializer(author,many=True)
        return JsonResponse(author_serializer.data,safe=False)
    elif request.method=='POST':
        author_data=JSONParser().parse(request)
        author_serializer=AuthorSerializer(data=author_data)
        if author_serializer.is_valid():
            author_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        author_data=JSONParser().parse(request)
        author=Author.objects.get(Author_ID=author_data['Author_ID'])
        author_serializer=AuthorSerializer(author,data=author_data)
        if author_serializer.is_valid():
            author_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        author=Author.objects.get(Author_ID=id)
        author.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def AuthorIDApi(request, id=0):
    if request.method=='GET':
        authorid = AuthorID.objects.all()
        authorid_serializer=AuthorIDSerializer(authorid,many=True)
        return JsonResponse(authorid_serializer.data,safe=False)
    elif request.method=='POST':
        authorid_data=JSONParser().parse(request)
        authorid_serializer=AuthorIDSerializer(data=authorid_data)
        if authorid_serializer.is_valid():
            authorid_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        authorid_data=JSONParser().parse(request)
        authorid=AuthorID.objects.get(AuthorID_ID=authorid_data['AuthorID_ID'])
        authorid_serializer=AuthorIDSerializer(authorid,data=authorid_data)
        if authorid_serializer.is_valid():
            authorid_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        authorid=AuthorID.objects.get(AuthorID_ID=id)
        authorid.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Descriptive_StaticsApi(request, id=0):
    if request.method=='GET':
        descriptive_statics = Descriptive_Statics.objects.all()
        descriptive_statics_serializer=Descriptive_StaticsSerializer(descriptive_statics,many=True)
        return JsonResponse(descriptive_statics_serializer.data,safe=False)
    elif request.method=='POST':
        descriptive_statics_data=JSONParser().parse(request)
        descriptive_statics_serializer=Descriptive_StaticsSerializer(data=descriptive_statics_data)
        if descriptive_statics_serializer.is_valid():
            descriptive_statics_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        descriptive_statics_data=JSONParser().parse(request)
        descriptive_statics=Descriptive_Statics.objects.get(Descriptive_Statics_ID=descriptive_statics_data['Descriptive_Statics_ID'])
        descriptive_statics_serializer=Descriptive_StaticsSerializer(descriptive_statics,data=descriptive_statics_data)
        if descriptive_statics_serializer.is_valid():
            descriptive_statics_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        descriptive_statics=Descriptive_Statics.objects.get(Descriptive_Statics_ID=id)
        descriptive_statics.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Research_QuestionsApi(request, id=0):
    if request.method=='GET':
        research_questions = Research_Questions.objects.all()
        research_questions_serializer=Research_QuestionsSerializer(research_questions,many=True)
        return JsonResponse(research_questions_serializer.data,safe=False)
    elif request.method=='POST':
        research_questions_data=JSONParser().parse(request)
        research_questions_serializer=Research_QuestionsSerializer(data=research_questions_data)
        if research_questions_serializer.is_valid():
            research_questions_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        research_questions_data=JSONParser().parse(request)
        research_questions=Research_Questions.objects.get(Research_Questions_ID=research_questions_data['Research_Questions_ID'])
        research_questions_serializer=Research_QuestionsSerializer(research_questions,data=research_questions_data)
        if research_questions_serializer.is_valid():
            research_questions_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        research_questions=Research_Questions.objects.get(Research_Questions_ID=id)
        research_questions.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Study_MethodsApi(request, id=0):
    if request.method=='GET':
        study_methods = Study_Methods.objects.all()
        study_methods_serializer=Study_MethodsSerializer(study_methods,many=True)
        return JsonResponse(study_methods_serializer.data,safe=False)
    elif request.method=='POST':
        study_methods_data=JSONParser().parse(request)
        study_methods_serializer=Study_MethodsSerializer(data=study_methods_data)
        if study_methods_serializer.is_valid():
            study_methods_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        study_methods_data=JSONParser().parse(request)
        study_methods=Study_Methods.objects.get(Study_Methods_ID=study_methods_data['Study_Methods_ID'])
        study_methods_serializer=Study_MethodsSerializer(study_methods,data=study_methods_data)
        if study_methods_serializer.is_valid():
            study_methods_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        study_methods=Study_Methods.objects.get(Study_Methods_ID=id)
        study_methods.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def SampleApi(request, id=0):
    if request.method=='GET':
        sample = Sample.objects.all()
        sample_serializer=SampleSerializer(sample,many=True)
        return JsonResponse(sample_serializer.data,safe=False)
    elif request.method=='POST':
        sample_data=JSONParser().parse(request)
        sample_serializer=SampleSerializer(data=sample_data)
        if sample_serializer.is_valid():
            sample_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        sample_data=JSONParser().parse(request)
        sample=Sample.objects.get(Sample_ID=sample_data['Sample_ID'])
        sample_serializer=SampleSerializer(sample,data=sample_data)
        if sample_serializer.is_valid():
            sample_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        sample=Sample.objects.get(Sample_ID=id)
        sample.delete()
        return JsonResponse("Deleted Successfully",safe=False)






        