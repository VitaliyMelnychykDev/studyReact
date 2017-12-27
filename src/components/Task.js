import React, {Component} from 'react';

import Lodash from 'lodash';

function Hobby(props) {
    return (
        <li>
            {props.hobbyObj.value}
            <span className="delete-block" onClick={() => props.removeItem(props.hobbyObj.id)}>x</span>
        </li>
    );
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            justDeleted: false,
            newHobby: '',
            hobbies: [
                {
                    'id': Lodash.uniqueId(),
                    'value': "swimming"
                },
                {
                    'id': Lodash.uniqueId(),
                    'value': "sky"
                }
            ]

        };
    }

    addHobby() {
        if (this.state.newHobby.length > 0) {
            let newHobby = {
                'id': Lodash.uniqueId(),
                'value': this.state.newHobby
            };
            this.setState({
                'hobbies': this.state.hobbies.concat(newHobby)
            });

        }
    }

    changeEnteredHobby(event) {
        this.setState({
            'newHobby': event.target.value
        });
    }

    deleteHobby(id) {
        let hobbies = this.state.hobbies;
        for (let hobbyIndex in hobbies) {
            if (hobbies[hobbyIndex].id == id) {
                hobbies.splice(hobbyIndex, 1);
                this.state.justDeleted = true;
                break;
            }
        }
        this.setState({
            hobbies: hobbies
        });

        setTimeout(function () {
            this.setState({
                justDeleted: false
            });
        }.bind(this), 500);
    }

    render() {
        let deletedBlock = '';
        if (this.state.justDeleted) {
            deletedBlock = <p className="delete-block">Hobby deleted</p>;
        }
        let list = this.state.hobbies.map(
            (hobby) => {
                    return <Hobby
                        key={hobby.id}
                        hobbyObj={hobby}
                        removeItem={this.deleteHobby.bind(this)}
                    />
            }
        )

        let countColor = (this.state.hobbies.length > 3) ? 'red' : 'black';
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newHobby}
                    onChange={this.changeEnteredHobby.bind(this)}
                />
                <button onClick={this.addHobby.bind(this)}>Add hobby</button>
                <p>Hobbies: <span style={{color:countColor}}>{this.state.hobbies.length}</span></p>
                <ul>
                    {list}
                </ul>
                {deletedBlock}
            </div>
        );
    }
}

export default Task;
