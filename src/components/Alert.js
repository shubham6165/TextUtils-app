import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        let word1 = word.toLowerCase();
        return word1[0].toUpperCase() + word.slice(1);
    }
    return (
        <div style = {{height: '50px'}}>
    { props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible`} role="alert" id="liveAlert">
                <strong>{capitalize(props.alert.type)}! </strong>{props.alert.msg}.
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div> }
        </div>
    )
}
