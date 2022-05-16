import './Notification.css'
import { useState, createContext, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message, severity }) => {

const notificationStyles = {
    position: 'absolute',
    top: 800,
    right: 700,
    width: 'auto',
    height: 'auto',
    padding: '25px',
    zIndex: 5,
    }

    if(message === '') {
        return null
    }

    const config = true ?
    {
        style: notificationStyles,
        className: `${severity === 'success' ? 'Success' : 'Error'}`
    } : {}

    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [ message, setMessage ] = useState('')
    const [ severity, setSeverity ] = useState('success')

    const setNotification = (sev, msg) =>  {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
                { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}