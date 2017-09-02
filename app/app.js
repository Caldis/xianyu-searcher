/**
 * 名称: 应用主入口
**/

// GBK
import './gbk'
// Libs
import React from 'react'
// Styles
import './app.global.less'
import style from './app.less'
// Material-UI
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value: ""
        }
    }
    
    handleSearch = () => {
        window.open(`https://s.2.taobao.com/list/list.htm?q=${window.$URL.encode(this.state.value)}&search_type=item`)
    }

    render() {
        return (
            <div className={style.app}>

                <div>
                    <h1 className={style.title}>搜索咸鱼</h1>
                    <div className={style.searchBox}>
                        <TextField
                            value={this.state.value}
                            style={{ width: 500}}
                            onChange={event => this.setState({ value: event.target.value })}
                            onKeyDown={p => p.key==='Enter' && this.handleSearch()}
                        />
                        <Button
                            raised
                            color="primary"
                            onClick={this.handleSearch}
                        >
                            请搜
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default App