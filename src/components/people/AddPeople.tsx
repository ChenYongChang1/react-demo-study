import React, { Component } from 'react'
import { Input } from 'antd'
import './addpeople.scss'
import 'antd/lib/input/style/css'
import { Select } from 'antd';
import 'antd/lib/select/style/css'
const { Option } = Select;
interface InterInputValue{
  userName: string,
  sex: number | string
}
interface InterAddpeople{
  name?: string
}
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

class AddPeople extends Component <InterAddpeople, InterInputValue> {
  constructor(props:any){
		super(props);
		this.state = {
      userName:'123',
      sex: ''
		}
  }
  handelChange(e:any){
    console.log((e as HTMLInputEvent).target.value);
		this.setState({
			userName: (e as HTMLInputEvent).target.value
		})
  }
  changeSex(value:string | number | any){
    console.log(value);
		this.setState({
			sex: value
		})
  }
  render(){
    return <div className="add-people">
      <div className="add-people-header">
        <div className="add-people-items">
          <Input placeholder="名字" defaultValue={this.state.userName} onChange={this.handelChange.bind(this)} />
        </div>
        <div className="add-people-items">
          <Select placeholder="名字" style={{ width: 200 }} defaultValue={this.state.sex} onChange={this.changeSex.bind(this)} >
            <Option value={1}>男</Option>
            <Option value={0}>女</Option>
          </Select>
        </div>
      </div>
    </div>
  }
}

export default AddPeople