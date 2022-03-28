const dependent_variable={template:` 
<div>

<h5 class="d-flex justify-content-center">
    Dependent Variable
</h5>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add Dependent_Variable 
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Dependent_Variable_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('Dependent_Variable_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Dependent_Variable_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Dependent_Variable_ID
        </th>
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
                v-model="Is_categoricalFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('Is_categorical',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Is_categorical',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Is_categorical
        </th>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="DV_nameFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('DV_name',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('DV_name',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            DV_name
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="de in dependent_variable">
        <td>{{de.Dependent_Variable_ID}}</td>
        <td>{{de.Quantitative_ID}}</td>
        <td>{{de.Is_categorical}}</td>
        <td>{{de.DV_name}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(de)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button"
            @click="deleteClick(de.Dependent_Variable_ID)"
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
                <span class="input-group-text">Dependent_Variable_ID</span>
                <input type="bigint" class="form-control" v-model="Dependent_Variable_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Quantitative_ID</span>
                <input type="bigint" class="form-control" v-model="Quantitative_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Is_categorical</span>
                <input type="text" class="form-control" v-model="Is_categorical">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">DV_name</span>
                <input type="text" class="form-control" v-model="DV_name">
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
        dependent_variable:[],
        modalTitle:"",
        Dependent_Variable_ID:0,
        Quantitative_ID:0,
        Is_categorical:0,
        DV_name:"",
        Dependent_Variable_IDFilter:"",
        Quantitative_IDFilter:"",
        Is_categoricalFilter:"",
        DV_nameFilter:"",
        dependent_variableWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"dependent_variable")
        .then((response)=>{
            this.dependent_variable=response.data;
            this.dependent_variableWithoutFilter=response.data;
        });

        axios.get(variables.API_URL+"quantitative")
        .then((response)=>{
            this.quantitative=response.data;
            this.quantitativeWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Dependent_Variable";
        this.Dependent_Variable_ID=null;
        this.Quantitative_ID=null;
        this.Is_categorical=null;
        this.DV_name=null;
    },
    editClick(de){
        this.modalTitle="Edit Dependent_Variable";
        this.Dependent_Variable_ID=de.Dependent_Variable_ID;
        this.Quantitative_ID=de.Quantitative_ID;
        this.Is_categorical=de.Is_categorical;
        this.DV_name=de.DV_name;
    },
    createClick(){
        axios.post(variables.API_URL+"dependent_variable",{
            Dependent_Variable_ID:this.Dependent_Variable_ID,
            Quantitative_ID:this.Quantitative_ID,
            Is_categorical:this.Is_categorical,
            DV_name:this.DV_name
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"dependent_variable",{
            Dependent_Variable_ID:this.Dependent_Variable_ID,
            Quantitative_ID:this.Quantitative_ID,
            Is_categorical:this.Is_categorical,
            DV_name:this.DV_name
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
        axios.delete(variables.API_URL+"dependent_variable/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var Dependent_Variable_IDFilter=this.Dependent_Variable_IDFilter;
        var Quantitative_IDFilter=this.Quantitative_IDFilter;
        var Is_categoricalFilter=this.Is_categoricalFilter;
        var DV_nameFilter=this.DV_nameFilter;

        this.dependent_variable=this.dependent_variableWithoutFilter.filter(
            function(el){
                return (el.Dependent_Variable_ID || '').toString().toLowerCase().includes(
                    Dependent_Variable_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Quantitative_ID || '').toString().toLowerCase().includes(
                    Quantitative_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Is_categorical || '').toString().toLowerCase().includes(
                    Is_categoricalFilter.toString().trim().toLowerCase()
                )
                &&
                (el.DV_name || '').toString().toLowerCase().includes(
                    DV_nameFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.dependent_variable=this.dependent_variableWithoutFilter.sort(function(a,b){
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