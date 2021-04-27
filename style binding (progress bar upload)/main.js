const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: '',
            selectedFileName:'',
            files: [
                {
                    "id": 1,
                    "name": "File 1.jpg"
                },
                {
                    "id": 2,
                    "name": "File 2.jpg"
                },
                {
                    "id": 3,
                    "name": "File 3.jpg"
                }
            ],
            hoveredItem: null,
            progress:0
        }
    },
    methods: {
        handleUpload () {
            this.uploading = true;
            // this.loadingImg = 'loading.gif';
            
            const updateProgress = setInterval(()=>{
                this.progress++

                if(this.progress == 100){
                    clearInterval(updateProgress);

                    setTimeout(() =>{
                        this.files.push({
                            id:this.files.length + 1,
                            name: this.selectedFile.name
                        })

                        this.upload = false
                        this.selectedFile = null
                        this.selectedFileName = ""
                    }, 1000)
                }
            }, 50)
        },
        browseFile () {
            this.$refs.file.click();
        },
        handleChange (event) {
            const files = event.target.files
            this.selectedFile = files[0]
            this.selectedFileName = files[0].name
        }
    }
})
const mountedApp = app.mount('#app')