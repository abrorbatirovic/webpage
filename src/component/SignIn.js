import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import toast from "react-hot-toast";

const PASSWORD = 'Oybek'

const SignIn = ({show, toggleModal}) => {

    const onFinish = (event) => {
        event.preventDefault()
        const eventPassword = event.target[0].value
        if (eventPassword.toUpperCase().trim() === PASSWORD.toUpperCase()) {
            window.open('https://batirovic-portfolio.netlify.app/', "blank")
            toggleModal()
        } else {
            toast.error('Неверный пароль')
        }
    }

    return (
        <Modal show={show} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Введите пароль чтобы войти на сайт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onFinish}>
                    <Form.Group>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control required type={'password'} placeholder={'Введите пароль'}/>
                    </Form.Group>
                    <Form.Group className={'mt-3 d-flex justify-content-end gap-2'}>
                        <Button type={'button'} variant={'danger'} onClick={toggleModal}>Отменить</Button>
                        <Button type={'submit'} variant={'primary'}>Войти</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SignIn;
