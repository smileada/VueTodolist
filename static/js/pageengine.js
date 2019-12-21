var app = new Vue({
    el: '#app',
    data() {
        return {
            title: 'Vue TodoList',
            addDialogShow:false,
            list:[],
            listdata:[],
            inputNameValue:'',
            inputSexValue:'',
            inputDateValue:'',
            inputWinValue:'',
            inputScoreValue:'',
            inputSectionValue:'',
            inputJobsValue:'',
            DialogShow:false
        }
    },
    created(){
    },
    methods:{
        handelclick(){
            this.addDialogShow=true
        },
        handelAddData(){
            this.list.push({
                'name':this.inputNameValue,
                'sex':this.inputSexValue,
                'date':this.inputDateValue,
                'win':this.inputWinValue,
                'score':this.inputScoreValue,
                'section':this.inputSectionValue,
                'jobs':this.inputJobsValue
            })
            this.resetForm()
            // console.log(this.list)
            this.addDialogShow=false
        },
        resetForm(){
            this.inputNameValue='';
                this.inputSexValue='';
                this.inputDateValue='';
                this.inputWinValue='';
                this.inputScoreValue='';
                this.inputSectionValue='';
                this.inputJobsValue='';
        },
        handelCancelData(){
            this.addDialogShow=false
            this.DialogShow=false
            this.resetForm()
        },
        handelDetail(item){
            this.DialogShow=true
            this.listdata=item
        },
        handelDelete(index){
            this.list.splice(index,1)
        }
    }
  })