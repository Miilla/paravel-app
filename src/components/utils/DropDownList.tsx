import * as React from 'react';
import './utils.css';
interface IPropsType {
    items: Array<{ value: string, name: string }>,
    title: string,
    toggleItem: (value: string, name: string) => void
}

interface IStateType {
    items: Array<{ value: string, name: string, isSelected: boolean }>;
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

    public toggleItem(value: string): void {
        const ddlItems = this.state.items.slice() as Array<{ value: string, name: string, isSelected: boolean }>;

        ddlItems.forEach(element => {
            if (element.value === value) {
                element.isSelected = !element.isSelected;
            }
        });
        this.setState({ items: ddlItems })
    }

    public toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    public render() {
        return (
            <div className="ddl-main" tabIndex={0} onBlur={() => { this.setState({ listOpen: false }) }}>
                <div className="ddl-wrapper">
                    <div className="ddl-header" onClick={() => this.toggleList()}>
                        <div className="ddl-header-title">{this.state.title}</div>
                        <span className="ddl-image" />
                    </div>
                    {this.state.listOpen &&
                        <div className="ddl-list">
                            {this.state.items && this.state.items.map((item) => {
                                return (
                                    <div key={item.value} className="ddl-list-item" onMouseDown={() => this.toggleItem(item.value)}  >
                                        <input type="checkbox" checked={item.isSelected} />
                                        <div>{item.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default DropDownList;
