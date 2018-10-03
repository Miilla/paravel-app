import * as React from 'react';
import './utils.css';

interface IPropsType {
    items: Array<{ value: string, name: string }>,
    title: string,
    toggleItem: (value: string, name: string) => void
}

interface IStateType {
    items: Array<{ value: string, name: string }>;
    title: string,
    listOpen: boolean,
}

class DropDownList extends React.Component<IPropsType, IStateType> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
            items: this._createList(this.props.items),
            title: this.props.title,
            listOpen: false,
        }
    }

    public _createList(items: Array<{ value: string, name: string }>): Array<{ value: string, name: string, isSelected: boolean }> {
        const ddlItems = items.slice() as Array<{ value: string, name: string, isSelected: boolean }>;
        ddlItems.forEach(element => {
            element.isSelected = false;
        });
        return ddlItems;
    }

    public toggleItem(item: string, value: string): void {
        const ddlItems = this.state.items.slice() as Array<{ value: string, name: string, isSelected: boolean }>;
        // ddlItems = ddlItems.find(item=>item.value==item.value )
        this.setState({ items: ddlItems })
    }

    public toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }



    public render() {
        return (
            <div className="ddl-main">
                <div className="ddl-wrapper">
                    <div className="ddl-header" onClick={() => this.toggleList()}>
                        <div className="ddl-header-title">{this.state.title}</div>
                        <span className="ddl-image" />
                    </div>
                    {this.state.listOpen &&
                        <ul className="ddl-list">
                            {this.state.items.map((item) => {
                                return (<li className="ddl-list-item" key={item.value} onClick={() => this.toggleItem(item.value, item.name)}>{item.name}</li>)
                            })}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default DropDownList;
