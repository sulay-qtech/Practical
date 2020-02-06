<template>
<div>
    <div class="row col-sm-10" style="background-color:lightgrey;">
        <h1 class="ml-4">G Notes</h1>
    </div>
    <div class="row" >
        <!-- <h1>Dashboard</h1> -->
        <div class="col-sm-4 border border-dark">

            
                <p v-for="(item,index) in notes" :key="index" class="update" :data-index="index">
                    <i class="fa fa-times pull-right delete" aria-hidden="true" :data-index="index"></i>
                    <!-- <i class="fa fa-window-close pull-right delete" :data-index="index"  aria-hidden="true"></i> -->
                    {{item.title}} <br/>
                    {{item.description}}
                     <hr>
                    </p>
   
        </div>

        <div class="col-sm-6 border border-dark ">
           
             <form class="mt-3" onsubmit="return false;">
                 <div class="pull-right">
                  <button class="mt-3 mr-4 mb-4"><i class="fa fa-plus-square" aria-hidden="true"></i> Add Note</button>
                  </div>
          <div class="form-group">
              <lable class="mb-3">Title</lable>
            <input type="text" class="form-control" placeholder="Title" v-model="title" />
          </div>
          <div class="form-group">
              <lable class="mb-3">Description</lable>
            <textarea v-model="description" class="form-control">

            </textarea>
          </div>
          <button v-if="isUpdate" type="submit" class="btn btn-primary mb-3" v-on:click="updateData">Update</button>
          <button v-else type="submit" class="btn btn-primary mb-3 pull-right" v-on:click="submit">Save</button>
        </form>
        </div>
    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            title:'',
            description:'',
            notes:[
            ],
            isUpdate:false,
            updateIndex:0,
            updating:true
            }
        },
        methods: {  
            submit:function(){
                this.notes.push({title:this.title,description:this.description});
                this.title='';
                this.description = '';
                },
                getData:function(index){
                    this.updateIndex = index;
                   this.title = this.notes[index].title;
                   this.description = this.notes[index].description;
                   this.isUpdate = true;
                    },
                    updateData:function(){
                        this.notes[this.updateIndex].title = this.title;
                        this.notes[this.updateIndex].description = this.description;

                        this.title='';
                        this.description = '';
                        this.isUpdate=false;
                        }
        },
        mounted() {
            $(document).on("click", ".update", e => {
                if(this.updating)
                {
                    const index = $(e.target).data("index");
                    this.getData(index);
                }
                this.updating = true;
            });

            $(document).on("click", ".delete", e => {
                this.updating=false;
            const index = $(e.target).data("index");
            this.notes.splice(index, 1);
            this.title='';
            this.description = '';
            });
    }
    }
</script>