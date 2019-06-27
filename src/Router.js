import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Register from './Register';
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'
import Textarea from './Textarea'
import TextareaUncontrolled from './TextareaUncontrolled'
import Select from './Select'
import SelectUncontrolled from './SelectUncontrolled';
import SelectMultiple from './SelectMultiple'
import SelectMultipleUncontrolled from './SelectMultipleUncontrolled';
import FileForm from './File';
import FileUncontrolled from './FileUncontrolled';
import Checkbox from './Checkbox';
import CheckboxUncontrolled from './CheckboxUncontrolled';
import Radio from './Radio';
import RadioUncontrolled from './RadioUncontrolled';
import OnClickSubmit from './OnClickSubmit';
import NoForm from './NoForm';
import Validation from './Validation';

const Router = () => {
    return (
        <BrowserRouter>
            <div>

                <ul>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/controlled">Controlled</Link></li>
                    <li><Link to="/uncontrolled">Uncontrolled</Link></li>
                    <li><Link to="/textarea">Textarea</Link></li>
                    <li><Link to="/textarea-uncontrolled">Textarea (Uncontrolled)</Link></li>
                    <li><Link to="/select">Select</Link></li>
                    <li><Link to="/select-uncontrolled">Select (Uncontrolled)</Link></li>
                    <li><Link to="/select-multiple">Select - Multiple</Link></li>
                    <li><Link to="/select-multiple-uncontrolled">Select - Multiple (Uncontrolled)</Link></li>
                    <li><Link to="/file">File</Link></li>
                    <li><Link to="/file-uncontrolled">File (Uncontrolled)</Link></li>
                    <li><Link to="/checkbox">Checkbox</Link></li>
                    <li><Link to="/checkbox-uncontrolled">Checkbox (Uncontrolled)</Link></li>
                    <li><Link to="/radio">Radio</Link></li>
                    <li><Link to="/radio-uncontrolled">Radio (Uncontrolled)</Link></li>
                    <li><Link to="/onclick-submit">OnClick Submit</Link></li>
                    <li><Link to="/no-form">{`No <form>`}</Link></li>
                    <li><Link to="/validation">with Validation</Link></li>
                </ul>

                <hr />

                <div>
                    <Route exact path="/" component={Register} />
                    <Route path="/controlled" component={Controlled} />
                    <Route path="/uncontrolled" component={Uncontrolled} />
                    <Route path="/textarea" component={Textarea} />
                    <Route path="/textarea-uncontrolled" component={TextareaUncontrolled} />
                    <Route path="/select" component={Select} />
                    <Route path="/select-uncontrolled" component={SelectUncontrolled} />
                    <Route path="/select-multiple" component={SelectMultiple} />
                    <Route path="/select-multiple-uncontrolled" component={SelectMultipleUncontrolled} />
                    <Route path="/file" component={FileForm} />
                    <Route path="/file-uncontrolled" component={FileUncontrolled} />
                    <Route path="/checkbox" component={Checkbox} />
                    <Route path="/checkbox-uncontrolled" component={CheckboxUncontrolled} />
                    <Route path="/radio" component={Radio} />
                    <Route path="/radio-uncontrolled" component={RadioUncontrolled} />
                    <Route path="/onclick-submit" component={OnClickSubmit} />
                    <Route path="/no-form" component={NoForm} />
                    <Route path="/validation" component={Validation} />
                </div>

            </div>
        </BrowserRouter>
    )
}

export default Router