import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import weixin from './weixin.svg';
import aliplay from './alipay.svg';
import yinlian from './yinlian.svg';
import selectedGif from './selected.gif';

const col = {
    borderStyle: 'solid',
    borderColor: '#e0dddd',
    width: '180px',
    height: '75px',
}

const colSelect = {
    ...col,
    borderColor: '#2ca33b',
}

const check = {
    display: 'none',
}

const checkSelect = {
    float: 'right',
    display: 'block',
    position:'absolute',
    right: '-1px',
    bottom:'-1px',    
}

const image = {
    textAlign: 'center',
}

const text = {
    marginLeft: '5px',
}

class PayPicker extends Component {
    state = {
        select: 0,
    }

    onChange = (index)=>{
        this.setState({select: index})
    }

    render(){

        return(
            <Row gutter={16} style={{width:"1300px"}}>
                <Col key="1" span="4">
                    <Card onClick={()=>this.onChange(1)} style={this.state.select=== 1 ? colSelect : col}>
                        <p style={image}><img alt="" src={yinlian} height="22" /><span style={text}>银行卡支付</span></p>
                        <p><img alt="" src={selectedGif} height="20" style={this.state.select=== 1 ? checkSelect : check}/></p>
                    </Card>
                </Col>
                <Col key="2" span="4">
                    <Card onClick={()=>this.onChange(2)} style={this.state.select=== 2 ? colSelect : col}>
                        <p style={image}><img alt="" src={aliplay} height="22" /><span style={text}>支付宝</span></p>
                        <p><img alt="" src={selectedGif} height="20" style={this.state.select=== 2 ? checkSelect : check}/></p>
                    </Card>
                </Col>
                <Col key="3" span="4">
                    <Card onClick={()=>this.onChange(3)} style={this.state.select=== 3 ? colSelect : col}>
                        <p style={image}><img alt="" src={weixin} height="22" /><span style={text}>微信支付</span></p>
                        <p><img alt="" src={selectedGif} height="20" style={this.state.select=== 3 ? checkSelect : check}/></p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default PayPicker;