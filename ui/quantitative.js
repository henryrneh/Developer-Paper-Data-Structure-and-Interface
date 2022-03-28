const quantitative={template:` 
<div>

<h5 class="d-flex justify-content-center">
    Quantitative
</h5>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add Quantitative 
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Quantitative_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('Quantitative_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Quantitative_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Quantitative_ID
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Paper_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
                
                <button type="button" class="btn btn-light"
                @click="sortResult('Paper_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Paper_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Paper_ID
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Analysis_MethodFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
            
                <button type="button" class="btn btn-light"
                @click="sortResult('Analysis_Method',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Analysis_Method',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Analysis_Method
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="P_value_signFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
        
                <button type="button" class="btn btn-light"
                @click="sortResult('P_value_sign',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('P_value_sign',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            P_value_sign
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="P_valueFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('P_value',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('P_value',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            P_value
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="ORFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('OR',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('OR',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            OR
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="WUFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('WU',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('WU',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            WU
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="TFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('T',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('T',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            T
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Degrees_of_FreedomFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Degrees_of_Freedom',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Degrees_of_Freedom',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Degrees_of_Freedom
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="xf2Filter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('xf2',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('xf2',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            xf2
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="RFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('R',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('R',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            R
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="dfFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('df',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('df',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            df
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="CIlFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('CIl',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('CIl',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            CIl
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="CIrFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('CIr',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('CIr',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            CIr
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Cor_P_signFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Cor_P_sign',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Cor_P_sign',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Cor_P_sign
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Cor_PFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Cor_P',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Cor_P',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Cor_P
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="quan in quantitative">
        <td>{{quan.Quantitative_ID}}</td>
        <td>{{quan.Paper_ID}}</td>
        <td>{{quan.Analysis_Method}}</td>
        <td>{{quan.P_value_sign}}</td>
        <td>{{quan.P_value}}</td>
        <td>{{quan.OR}}</td>
        <td>{{quan.WU}}</td>
        <td>{{quan.T}}</td>
        <td>{{quan.Degrees_of_Freedom}}</td>
        <td>{{quan.xf2}}</td>
        <td>{{quan.R}}</td>
        <td>{{quan.df}}</td>
        <td>{{quan.CIl}}</td>
        <td>{{quan.CIr}}</td>
        <td>{{quan.Cor_P_sign}}</td>
        <td>{{quan.Cor_P}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(quan)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button"
            @click="deleteClick(quan.Quantitative_ID)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">Quantitative_ID</span>
                <input type="bigint" class="form-control" v-model="Quantitative_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Paper_ID</span>
                <input type="bigint" class="form-control" v-model="Paper_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Analysis_Method</span>
                <input type="text" class="form-control" v-model="Analysis_Method">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">P_value_sign</span>
                <input type="text" class="form-control" v-model="P_value_sign">
            </div>
            
            <div class="input-group mb-3">
                <span class="input-group-text">P_value</span>
                <input type="bigint" class="form-control" v-model="P_value">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">OR</span>
                <input type="bigint" class="form-control" v-model="OR">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">WU</span>
                <input type="bigint" class="form-control" v-model="WU">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">T</span>
                <input type="bigint" class="form-control" v-model="T">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Degrees_of_Freedom</span>
                <input type="bigint" class="form-control" v-model="Degrees_of_Freedom">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">xf2</span>
                <input type="bigint" class="form-control" v-model="xf2">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">R</span>
                <input type="bigint" class="form-control" v-model="R">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">df</span>
                <input type="bigint" class="form-control" v-model="df">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">CIl</span>
                <input type="bigint" class="form-control" v-model="CIl">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">CIr</span>
                <input type="bigint" class="form-control" v-model="CIr">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Cor_P_sign</span>
                <input type="bigint" class="form-control" v-model="Cor_P_sign">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Cor_P</span>
                <input type="bigint" class="form-control" v-model="Cor_P">
            </div>

        </div>
    </div>

        <button type="button" 
        @click="createClick()"
        class="btn btn-primary">
        Create
        </button>

        <button type="button" 
        @click="updateClick()"
        class="btn btn-primary">
        Update
        </button>

    </div> 
</div>
</div>
</div>
</div>

`,
// Bootstrap table
data(){
    return{
        quantitative:[],
        modalTitle:"",
        Quantitative_ID:0,
        Paper_ID:0,
        Analysis_Method:"",
        P_value_sign:"",
        P_value:0,
        OR:0,
        WU:0,
        T:0,
        Degrees_of_Freedom:0,
        xf2:0,
        R:0,
        df:0,
        CIl:0,
        CIr:0,
        Cor_P_sign:"",
        Cor_P:0,
        Quantitative_IDFilter:"",
        Paper_IDFilter:"",
        Analysis_MethodFilter:"",
        P_value_signFilter:"",
        P_valueFilter:"",
        ORFilter:"",
        WUFilter:"",
        TFilter:"",
        Degrees_of_FreedomFilter:"",
        xf2Filter:"",
        RFilter:"",
        dfFilter:"",
        CIlFilter:"",
        CIrFilter:"",
        Cor_P_signFilter:"",
        Cor_PFilter:"",
        quantitativeWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"quantitative")
        .then((response)=>{
            this.quantitative=response.data;
            this.quantitativeWithoutFilter=response.data;
        });

        axios.get(variables.API_URL+"main")
        .then((response)=>{
            this.main=response.data;
            this.mainWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Quantitative (max digit = 4)";
        this.Quantitative_ID=null;
        this.Paper_ID=null;
        this.Analysis_Method=null;
        this.P_value_sign=null;
        this.P_value=null;
        this.OR=null;
        this.WU=null;
        this.T=null;
        this.Degrees_of_Freedom=null;
        this.xf2=null;
        this.R=null;
        this.df=null;
        this.CIl=null;
        this.CIr=null;
        this.Cor_P_sign=null;
        this.Cor_P=null;
    },
    editClick(quan){
        this.modalTitle="Edit Quantitative (max digit = 4)";
        this.Quantitative_ID=quan.Quantitative_ID;
        this.Paper_ID=quan.Paper_ID;
        this.Analysis_Method=quan.Analysis_Method;
        this.P_value_sign=quan.P_value_sign;
        this.P_value=quan.P_value;
        this.OR=quan.OR;
        this.WU=quan.WU;
        this.T=quan.T;
        this.Degrees_of_Freedom=quan.Degrees_of_Freedom;
        this.xf2=quan.xf2;
        this.R=quan.R;
        this.df=quan.df;
        this.CIl=quan.CIl;
        this.CIr=quan.CIr;
        this.Cor_P_sign=quan.Cor_P_sign;
        this.Cor_P=quan.Cor_P;
    },
    createClick(){
        axios.post(variables.API_URL+"quantitative",{
            Quantitative_ID:this.Quantitative_ID,
            Paper_ID:this.Paper_ID,
            Analysis_Method:this.Analysis_Method,
            P_value_sign:this.P_value_sign,
            P_value:this.P_value,
            OR:this.OR,
            WU:this.WU,
            T:this.T,
            Degrees_of_Freedom:this.Degrees_of_Freedom,
            xf2:this.xf2,
            R:this.R,
            df:this.df,
            CIl:this.CIl,
            CIr:this.CIr,
            Cor_P_sign:this.Cor_P_sign,
            Cor_P:this.Cor_P,
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
        // console.log(this.Main_ID, this.Paper_ID, this.Name, this.Research, this.Year);
    },
    updateClick(){
        axios.put(variables.API_URL+"quantitative",{
            Quantitative_ID:this.Quantitative_ID,
            Paper_ID:this.Paper_ID,
            Analysis_Method:this.Analysis_Method,
            P_value_sign:this.P_value_sign,
            P_value:this.P_value,
            OR:this.OR,
            WU:this.WU,
            T:this.T,
            Degrees_of_Freedom:this.Degrees_of_Freedom,
            xf2:this.xf2,
            R:this.R,
            df:this.df,
            CIl:this.CIl,
            CIr:this.CIr,
            Cor_P_sign:this.Cor_P_sign,
            Cor_P:this.Cor_P,
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
        // console.log(this.Main_ID, this.Paper_ID, this.Name, this.Research, this.Year);
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"quantitative/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var Quantitative_IDFilter=this.Quantitative_IDFilter;
        var Paper_IDFilter=this.Paper_IDFilter;
        var Analysis_MethodFilter=this.Analysis_MethodFilter;
        var P_value_signFilter=this.P_value_signFilter;
        var P_valueFilter=this.P_valueFilter;
        var ORFilter=this.ORFilter;
        var WUFilter=this.WUFilter;
        var TFilter=this.TFilter;
        var Degrees_of_FreedomFilter=this.Degrees_of_FreedomFilter;
        var xf2Filter=this.xf2Filter;
        var RFilter=this.RFilter;
        var dfFilter=this.dfFilter;
        var CIlFilter=this.CIlFilter;
        var CIrFilter=this.CIrFilter;
        var Cor_P_signFilter=this.Cor_P_signFilter;
        var Cor_PFilter=this.Cor_PFilter;

        this.quantitative=this.quantitativeWithoutFilter.filter(
            function(el){
                return (el.Quantitative_ID || '').toString().toLowerCase().includes(
                    Quantitative_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Paper_ID || '').toString().toLowerCase().includes(
                    Paper_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Analysis_Method || '').toString().toLowerCase().includes(
                    Analysis_MethodFilter.toString().trim().toLowerCase()
                )
                &&
                (el.P_value_sign || '').toString().toLowerCase().includes(
                    P_value_signFilter.toString().trim().toLowerCase()
                )
                &&
                (el.P_value || '').toString().toLowerCase().includes(
                    P_valueFilter.toString().trim().toLowerCase()
                )
                &&
                (el.OR || '').toString().toLowerCase().includes(
                    ORFilter.toString().trim().toLowerCase()
                )
                &&
                (el.WU || '').toString().toLowerCase().includes(
                    WUFilter.toString().trim().toLowerCase()
                )
                &&
                (el.T || '').toString().toLowerCase().includes(
                    TFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Degrees_of_Freedom || '').toString().toLowerCase().includes(
                    Degrees_of_FreedomFilter.toString().trim().toLowerCase()
                )
                &&
                (el.xf2 || '').toString().toLowerCase().includes(
                    xf2Filter.toString().trim().toLowerCase()
                )
                &&
                (el.R || '').toString().toLowerCase().includes(
                    RFilter.toString().trim().toLowerCase()
                )
                &&
                (el.df || '').toString().toLowerCase().includes(
                    dfFilter.toString().trim().toLowerCase()
                )
                &&
                (el.CIl || '').toString().toLowerCase().includes(
                    CIlFilter.toString().trim().toLowerCase()
                )
                &&
                (el.CIr || '').toString().toLowerCase().includes(
                    CIrFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Cor_P_sign || '').toString().toLowerCase().includes(
                    Cor_P_signFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Cor_P || '').toString().toLowerCase().includes(
                    Cor_PFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.quantitative=this.quantitativeWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }

},
mounted:function(){
    this.refreshData();
}

}