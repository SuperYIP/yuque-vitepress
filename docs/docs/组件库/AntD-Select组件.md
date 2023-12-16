下拉框可以模糊搜索，并且可以多选。增加全选/清空按钮
```javascript
<Select
    style={{ width: 200 }}
    value={jobValue}
    maxTagCount={3} // 设置最大标签数量为3
    onChange={(value) => {
        this.jobId = value
        this.setState({ jobValue: value })
    }}
    mode="multiple" // 设置为可以多选
    showSearch  // 设置为可以搜索
    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}   // 搜索逻辑
    dropdownRender={(menu) => {
        return (
            <>
                {menu}
                <Button type="text" style={{ marginTop: '10px' }} block onClick={() => {
                    if (this.state.isSelectAll) {
                        this.jobId = []
                        this.setState({
                            jobValue: [],
                            isSelectAll: false
                        })
                    } else {
                        this.jobId.push(...jobList.map(i => i.jobId))
                        this.setState({
                            jobValue: this.jobId,
                            isSelectAll: true
                        })
                    }
                }}>
                    {this.state.isSelectAll ? '清空' : '全选'}
                </Button>
            </>
        )
    }}
>
```
