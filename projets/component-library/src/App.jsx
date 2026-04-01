import React from 'react'
import Button from './components/Button'
import './App.css'
import { login } from './hooks/useLogin'
import Banner from './components/Banner'

export default function App() {
    return (
        <div className="app">
            <h1>Component Library++</h1>
            <div className="button-showcase">
                <p>Buttons</p>
                <div className="square-btn-container">
                    <p>Square Buttons</p>
                    <Button color="red" shape="square" onClick={login}>Test Button</Button>
                    <Button color="blue" shape="square" onClick={login}>Another Button</Button>
                    <Button color="green" shape="square" onClick={login}>Yet Another Button</Button>
                    <Button color="yellow" shape="square" onClick={login}>One More Button</Button>
                    <Button color="indigo" shape="square" onClick={login}>Indigo Button</Button>    
                    <Button color="purple" shape="square" onClick={login}>Purple Button</Button>
                    <Button color="pink" shape="square" onClick={login}>Pink Button</Button>
                </div>
                <div className="pill-btn-container">
                    <p>Pill Buttons</p>
                    <Button color="red" shape="pill" onClick={login}>Red Pill Button</Button>
                    <Button color="blue" shape="pill" onClick={login}>Blue Pill Button</Button>
                    <Button color="green" shape="pill" onClick={login}>Green Pill Button</Button>
                    <Button color="yellow" shape="pill" onClick={login}>Yellow Pill Button</Button>
                    <Button color="indigo" shape="pill" onClick={login}>Indigo Pill Button</Button>
                    <Button color="purple" shape="pill" onClick={login}>Purple Pill Button</Button>
                    <Button color="pink" shape="pill" onClick={login}>Pink Pill Button</Button>
                </div>
            </div>

            <div className="banner-showcase">
                <p>Banners</p>
                <p>Single-line Banners</p>
                <Banner type="success"/>
                <Banner type="warning"/>
                <Banner type="error"/>   
                <Banner type="neutral"/>
                <p>Multi-line Banners</p>
                <Banner type="success">Congratulations! You did it!</Banner>
                <Banner type="warning">Attention! Please check your input.</Banner>
                <Banner type="error">There is a problem with your application.</Banner>
                <Banner type="neutral">Update available. Please refresh the page.</Banner>
                
            </div>
        </div>
    )
}
