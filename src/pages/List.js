import React,{Component} from 'react'

class List extends Component {

    constructor(){
        super();
        this.state = {
            id : '',
            nama : '',
            editDisabled : false,
            items:[]
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState({
                nama : '',
                items:[...data]
            },() => {
                alert(this.state.items)
            })
        })
    }

    onSubmit = e =>{
        e.preventDefault();
        addItem(this.state.nama).then(() => {
            this.getAll()
        })
        this.setState({
            nama:''
        })
    }

    onUpdate = e =>{
        e.preventDefault();
        updateItem(this.state.nama, this.state.id).then(() => {
            this.getAll()
        })
        this.setState({
            nama:'',
            editDisabled:''
        })
    }

    onEdit = e =>{
        e.preventDefault();
        var data = [...this.state.items];
        data.forEach((item,index) => {
            if(item.id === itemid){
                this.setState({
                    id : item.id,
                    nama : item.nama,
                    editDisabled : true
                })
            }
        })
    }

    onDelete = (val,e) => {
        e.preventDefault();
        deleteItem(val);
        this.getAll();
    }

    render(){
        
    }

}
