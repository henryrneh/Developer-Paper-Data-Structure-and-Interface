from django.conf.urls import url
from dpl import views



urlpatterns=[
    url(r'^main$',views.MainApi),
    url(r'^main/([0-9]+)$',views.MainApi),

    url(r'^qualitative$',views.QualitativeApi),
    url(r'^qualitative/([0-9]+)$',views.QualitativeApi),

    url(r'^quantitative$',views.QuantitativeApi),
    url(r'^quantitative/([0-9]+)$',views.QuantitativeApi),

    url(r'^independent_variable$',views.Independent_VariableApi),
    url(r'^independent_variable/([0-9]+)$',views.Independent_VariableApi),

    url(r'^iv_level$',views.IV_LevelApi),
    url(r'^iv_level/([0-9]+)$',views.IV_LevelApi),

    url(r'^dependent_variable$',views.Dependent_VariableApi),
    url(r'^dependent_variable/([0-9]+)$',views.Dependent_VariableApi),

    url(r'^dv_level$',views.DV_LevelApi),
    url(r'^dv_level/([0-9]+)$',views.DV_LevelApi),

    url(r'^agreement$',views.AgreementApi),
    url(r'^agreement/([0-9]+)$',views.AgreementApi),

    url(r'^author$',views.AuthorApi),
    url(r'^author/([0-9]+)$',views.AuthorApi),

    url(r'^authorid$',views.AuthorIDApi),
    url(r'^authorid/([0-9]+)$',views.AuthorIDApi),

    url(r'^descriptive_statics$',views.Descriptive_StaticsApi),
    url(r'^descriptive_statics/([0-9]+)$',views.Descriptive_StaticsApi),

    url(r'^research_questions$',views.Research_QuestionsApi),
    url(r'^research_questions/([0-9]+)$',views.Research_QuestionsApi),

    url(r'^study_methods$',views.Study_MethodsApi),
    url(r'^study_methods/([0-9]+)$',views.Study_MethodsApi),

    url(r'^sample$',views.SampleApi),
    url(r'^sample/([0-9]+)$',views.SampleApi),
]