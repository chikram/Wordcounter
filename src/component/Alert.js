import React from 'react'

function Alert(probs) {
    const cap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        probs.alert && <div className={`alert alert-${probs.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(probs.alert.type)}</strong>:{probs.alert.msg}

        </div>
    )
}

export default Alert
