const iv_level={template:` 
<div>

<h5 class="d-flex justify-content-center">
    Iv Level 
</h5>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add IV_Level 
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="IV_Level_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('IV_Level_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('IV_Level_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            IV_Level_ID
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Independent_Variable_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
                
                <button type="button" class="btn btn-light"
                @click="sortResult('Independent_Variable_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Independent_Variable_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Independent_Variable_ID
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="NameFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
            
                <button type="button" class="btn btn-light"
                @click="sortResult('Name',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Name',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Name
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Is_baselineFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
        
                <button type="button" class="btn btn-light"
                @click="sortResult('Is_baseline',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Is_baseline',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Is_baseline
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
                v-model="CoefFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Coef',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Coef',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Coef
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
                v-model="EstimatesFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Estimates',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Estimates',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Estimates
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="ExpFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('Exp',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Exp',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Exp
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="SEFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
    
                <button type="button" class="btn btn-light"
                @click="sortResult('SE',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('SE',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            SE
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="iv in iv_level">
        <td>{{iv.IV_Level_ID}}</td>
        <td>{{iv.Independent_Variable_ID}}</td>
        <td>{{iv.Name}}</td>
        <td>{{iv.Is_baseline}}</td>
        <td>{{iv.P_value_sign}}</td>
        <td>{{iv.P_value}}</td>
        <td>{{iv.CIl}}</td>
        <td>{{iv.CIr}}</td>
        <td>{{iv.Coef}}</td>
        <td>{{iv.OR}}</td>
        <td>{{iv.Estimates}}</td>
        <td>{{iv.Exp}}</td>
        <td>{{iv.SE}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(iv)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button"
            @click="deleteClick(iv.IV_Level_ID)"
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
                <span class="input-group-text">IV_Level_ID</span>
                <input type="bigint" class="form-control" v-model="IV_Level_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Independent_Variable_ID</span>
                <input type="bigint" class="form-control" v-model="Independent_Variable_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="Name">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Is_baseline</span>
                <input type="text" class="form-control" v-model="Is_baseline">
            </div>
            
            <div class="input-group mb-3">
                <span class="input-group-text">P_value_sign</span>
                <input type="bigint" class="form-control" v-model="P_value_sign">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">P_value</span>
                <input type="bigint" class="form-control" v-model="P_value">
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
                <span class="input-group-text">Coef</span>
                <input type="bigint" class="form-control" v-model="Coef">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">OR</span>
                <input type="bigint" class="form-control" v-model="OR">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Estimates</span>
                <input type="bigint" class="form-control" v-model="Estimates">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Exp</span>
                <input type="bigint" class="form-control" v-model="Exp">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">SE</span>
                <input type="bigint" class="form-control" v-model="SE">
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
        iv_level:[],
        modalTitle:"",
        IV_Level_ID:0,
        Independent_Variable_ID:0,
        Name:"",
        Is_baseline:0,
        P_value_sign:"",
        P_value:0,
        CIl:0,
        CIr:0,
        Coef:0,
        OR:0,
        Estimates:0,
        Exp:0,
        SE:0,
        IV_Level_IDFilter:"",
        Independent_Variable_IDFilter:"",
        NameFilter:"",
        Is_baselineFilter:"",
        P_value_signFilter:"",
        P_valueFilter:"",
        CIlFilter:"",
        CIrFilter:"",
        CoefFilter:"",
        ORFilter:"",
        EstimatesFilter:"",
        ExpFilter:"",
        SEFilter:"",
        iv_levelWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"iv_level")
        .then((response)=>{
            this.iv_level=response.data;
            this.iv_levelWithoutFilter=response.data;
        });

        axios.get(variables.API_URL+"independent_variable")
        .then((response)=>{
            this.independent_variable=response.data;
            this.independent_variableFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add IV_Level";
        this.IV_Level_ID=null;
        this.Independent_Variable_ID=null;
        this.Name=null;
        this.Is_baseline=null;
        this.P_value_sign=null;
        this.P_value=null;
        this.CIl=null;
        this.CIr=null;
        this.Coef=null;
        this.OR=null;
        this.Estimates=null;
        this.Exp=null;
        this.SE=null;
    },
    editClick(iv){
        this.modalTitle="Edit IV_Level";
        this.IV_Level_ID=iv.IV_Level_ID;
        this.Independent_Variable_ID=iv.Independent_Variable_ID;
        this.Name=iv.Name;
        this.Is_baseline=iv.Is_baseline;
        this.P_value_sign=iv.P_value_sign;
        this.P_value=iv.P_value;
        this.CIl=iv.CIl;
        this.CIr=iv.CIr;
        this.Coef=iv.Coef;
        this.OR=iv.OR;
        this.Estimates=iv.Estimates;
        this.Exp=iv.Exp;
        this.SE=iv.SE;
    },
    createClick(){
        axios.post(variables.API_URL+"iv_level",{
            IV_Level_ID:this.IV_Level_ID,
            Independent_Variable_ID:this.Independent_Variable_ID,
            Name:this.Name,
            Is_baseline:this.Is_baseline,
            P_value_sign:this.P_value_sign,
            P_value:this.P_value,
            CIl:this.CIl,
            CIr:this.CIr,
            Coef:this.Coef,
            OR:this.OR,
            Estimates:this.Estimates,
            Exp:this.Exp,
            SE:this.SE,
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"iv_level",{
            IV_Level_ID:this.IV_Level_ID,
            Independent_Variable_ID:this.Independent_Variable_ID,
            Name:this.Name,
            Is_baseline:this.Is_baseline,
            P_value_sign:this.P_value_sign,
            P_value:this.P_value,
            CIl:this.CIl,
            CIr:this.CIr,
            Coef:this.Coef,
            OR:this.OR,
            Estimates:this.Estimates,
            Exp:this.Exp,
            SE:this.SE,
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"iv_level/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var IV_Level_IDFilter=this.IV_Level_IDFilter;
        var Independent_Variable_IDFilter=this.Independent_Variable_IDFilter;
        var NameFilter=this.NameFilter;
        var Is_baselineFilter=this.Is_baselineFilter;
        var P_value_signFilter=this.P_value_signFilter;
        var P_valueFilter=this.P_valueFilter;
        var CIlFilter=this.CIlFilter;
        var CIrFilter=this.CIrFilter;
        var CoefFilter=this.CoefFilter;
        var ORFilter=this.ORFilter;
        var EstimatesFilter=this.EstimatesFilter;
        var ExpFilter=this.ExpFilter;
        var SEFilter=this.SEFilter;

        this.iv_level=this.iv_levelWithoutFilter.filter(
            function(el){
                return (el.IV_Level_ID || '').toString().toLowerCase().includes(
                    IV_Level_IDFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Independent_Variable_ID || '').toString().toLowerCase().includes(
                    Independent_Variable_IDFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Name || '').toString().toLowerCase().includes(
                    NameFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Is_baseline || '').toString().toLowerCase().includes(
                    Is_baselineFilter.toString().trim().toLowerCase()
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
                (el.CIl || '').toString().toLowerCase().includes(
                    CIlFilter.toString().trim().toLowerCase()
                )
                &&
                (el.CIr || '').toString().toLowerCase().includes(
                    CIrFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Coef || '').toString().toLowerCase().includes(
                    CoefFilter.toString().trim().toLowerCase()
                )
                &&
                (el.OR || '').toString().toLowerCase().includes(
                    ORFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Estimates || '').toString().toLowerCase().includes(
                    EstimatesFilter.toString().trim().toLowerCase()
                )
                &&
                (el.Exp || '').toString().toLowerCase().includes(
                    ExpFilter.toString().trim().toLowerCase()
                )
                &&
                (el.SE || '').toString().toLowerCase().includes(
                    SEFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.iv_level=this.iv_levelWithoutFilter.sort(function(a,b){
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