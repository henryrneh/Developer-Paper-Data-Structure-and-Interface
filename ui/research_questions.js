const research_questions={template:` 
<div>

<h5 class="d-flex justify-content-center">
    Research Questions 
</h5>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add Research_Questions 
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            <div class="d-flex flex-row">

            <input class="form-control form-control-sm m-2"
                v-model="Research_Questions_IDFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('Research_Questions_ID',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Research_Questions_ID',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Research_Questions_ID
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
                v-model="Research_QuestionsFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">

                <button type="button" class="btn btn-light"
                @click="sortResult('Research_Questions',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('Research_Questions',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>
            </div>
            Research_Questions
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="res in research_questions">
        <td>{{res.Research_Questions_ID}}</td>
        <td>{{res.Paper_ID}}</td>
        <td>{{res.Research_Questions}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(res)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button"
            @click="deleteClick(res.Research_Questions_ID)"
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
                <span class="input-group-text">Research_Questions_ID</span>
                <input type="bigint" class="form-control" v-model="Research_Questions_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Paper ID</span>
                <input type="bigint" class="form-control" v-model="Paper_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Research_Questions</span>
                <input type="text" class="form-control" v-model="Research_Questions">
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
        research_questions:[],
        modalTitle:"",
        Research_Questions_ID:0,
        Paper_ID:0,
        Research_Questions:"",
        Research_Questions_IDFilter:"",
        Paper_IDFilter:"",
        Research_QuestionsFilter:"",
        research_questionsWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"research_questions")
        .then((response)=>{
            this.research_questions=response.data;
            this.research_questionsWithoutFilter=response.data;
        });

        axios.get(variables.API_URL+"main")
        .then((response)=>{
            this.main=response.data;
            this.mainWithoutFilter=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Research_Questions";
        this.Research_Questions_ID=null;
        this.Paper_ID=null;
        this.Research_Questions=null;
    },
    editClick(res){
        this.modalTitle="Edit Research_Questions";
        this.Research_Questions_ID=res.Research_Questions_ID;
        this.Paper_ID=res.Paper_ID;
        this.Research_Questions=res.Research_Questions;
    },
    createClick(){
        axios.post(variables.API_URL+"research_questions",{
            Research_Questions_ID:this.Research_Questions_ID,
            Paper_ID:this.Paper_ID,
            Research_Questions:this.Research_Questions
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"research_questions",{
            Research_Questions_ID:this.Research_Questions_ID,
            Paper_ID:this.Paper_ID,
            Research_Questions:this.Research_Questions
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
        axios.delete(variables.API_URL+"research_questions/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var Research_Questions_IDFilter=this.Research_Questions_IDFilter;
        var Paper_IDFilter=this.Paper_IDFilter;
        var Research_QuestionsFilter=this.Research_QuestionsFilter;

        this.research_questions=this.research_questionsWithoutFilter.filter(
            function(el){
                return (el.Research_Questions_ID || '').toString().toLowerCase().includes(
                    Research_Questions_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Paper_ID || '').toString().toLowerCase().includes(
                    Paper_IDFilter.toString().trim().toLowerCase()
                )&&
                (el.Research_Questions || '').toString().toLowerCase().includes(
                    Research_QuestionsFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.research_questions=this.research_questionsWithoutFilter.sort(function(a,b){
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