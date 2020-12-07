import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'


class App extends Component{
    constructor(){
        super()
        this.state ={
            fullName:'',
            userName:'',
            email:'',
            password:'',
            image:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeImage = this.changeImage.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }    
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }    
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeImage(event){
        this.setState({
            image:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const  registered = {
            fullName : this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password:this.state.password,
            image:this.state.image
        }
        
        axios.post('http://localhost:4000/app/signup',registered)
             .then(response =>console.log(response.data))
        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:'',
            image:''
        })

    }
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                            placeholder='FullName'
                            onChange={this.changeFullName}
                            value ={this.state.fullName}
                            className ='form-control form-group'
                            />
                            <input type="text"
                            placeholder='UserName'
                            onChange={this.changeUserName}
                            value ={this.state.userName}
                            className ='form-control form-group'
                            />
                            <input type="text"
                            placeholder='E-Mail'
                            onChange={this.changeEmail}
                            value ={this.state.email}
                            className ='form-control form-group'
                            />
                            <input type="password"
                            placeholder='Password'
                            onChange={this.changePassword}
                            value ={this.state.password}
                            className ='form-control form-group'
                            />
                            <label for="image" className="text-black" >Select your Profile Pic </label>
                            <input type="file" name="image" className ='form-control form-group'
                            onChange={this.changeImage}
                            value ={this.state.IMAGE}
                            accept="image/*"  />
                            <input type="submit" className="btn btn-danger btn-block" value="Submit"/>

                        </form>
                    </div>
                </div>
            </div>
          );
    }
} 
export default App ;