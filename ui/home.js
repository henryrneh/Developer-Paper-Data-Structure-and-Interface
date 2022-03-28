const home={template:`
<div>

<h5 class="d-flex justify-content-center">
    Home 
</h5>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add Paper Home 
</button>

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
                <span class="input-group-text">Main ID</span>
                <input type="bigint" class="form-control" v-model="Main_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Paper ID</span>
                <input type="bigint" class="form-control" v-model="Paper_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="Name">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Research</span>
                <input type="text" class="form-control" v-model="Research">
            </div>
            
            <div class="input-group mb-3">
                <span class="input-group-text">Year</span>
                <input type="bigint" class="form-control" v-model="Year">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Qualitative_ID</span>
                <input type="bigint" class="form-control" v-model="Qualitative_ID">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Data_Analysis_Method</span>
                <input type="bigint" class="form-control" v-model="Data_Analysis_Method">
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
        main:[],
        qualitative:[],
        modalTitle:"",
        Main_ID:0,
        Paper_ID:0,
        Name:"",
        Research:"",
        Year:0,
        Qualitative_ID:0,
        Data_Analysis_Method:"",
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"main")
        .then((response)=>{
            this.main=response.data;
        });

        axios.get(variables.API_URL+"qualitative")
        .then((response)=>{
            this.qualitative=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Paper Home";
        this.Main_ID=null;
        this.Paper_ID=null;
        this.Name=null;
        this.Research=null;
        this.Year=null;
        this.Qualitative_ID=null;
        this.Data_Analysis_Method=null;
    },
    // editClick(ma){
    //     this.modalTitle="Edit Main";
    //     this.Main_ID=ma.Main_ID;
    //     this.Paper_ID=ma.Paper_ID;
    //     this.Name=ma.Name;
    //     this.Research=ma.Research;
    //     this.Year=ma.Year;
    // },
    createClick(){
        axios.post(variables.API_URL+"main",{
            Main_ID:this.Main_ID,
            Paper_ID:this.Paper_ID,
            Name:this.Name,
            Research:this.Research,
            Year:this.Year
        })
        .then((response)=>{
            this.refreshData();
            console.log("post then main");
            alert(response.data);
        });

        this.refreshData(); 

        axios.post(variables.API_URL+"qualitative",{
            Qualitative_ID:this.Qualitative_ID,
            Paper_ID:this.Paper_ID,
            Data_Analysis_Method:this.Data_Analysis_Method
        })
        .then((response)=>{
            this.refreshData();
            console.log("post the qualitative")
            alert(response.data);
        });

        

    },

},
mounted:function(){
    this.refreshData();
}

}