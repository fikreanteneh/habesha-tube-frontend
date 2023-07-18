import styled from "@emotion/styled";


export const TextField = styled.input({
    width: '100%',
    borderRadius: '10px',
    border: '1.5px solid gray',
    fontSize: '1.2rem',
    height: '3rem',
    margin: '4px auto',
    ':focus': {
        border: '1.5px solid blue',
    }
})

export const TextArea = styled.textarea({
    width: '100%',
    borderRadius: '10px',
    fontSize: '1.2rem',
    height: '8rem',
    margin: '4px auto'
})


const generalButton = {
    height: '3rem',
    width: '100%',
    fontSize: '1.5rem',
    color: 'white',
    borderRadius: '12px',
    border: 'none',
    margin: '4px auto',
    backgroundColor: 'blue',
    ':hover': {
        transition: '0.3s',
        backgroundColor: 'rgb(0,0,128)',
        boxShadow: '10px 10px'
    }
}


export const Button = styled.button({
    ...generalButton, 
    ':hover': {
        ...generalButton[':hover'],
    }
})


export const OrangeButton = styled.button({
    ...generalButton, 
    backgroundColor: 'rgb(255,128,0)',
    ':hover': {
        ...generalButton[':hover'],
        backgroundColor: 'rgb(255,64,0)',
    }
})


export const HalfButton = styled.button({
    ...generalButton, 
    width: '48%',
    ':hover': {
        ...generalButton[':hover'],
    }
})

export const HalfOrangeButton = styled.button({
    ...generalButton, 
    width: '48%',
    backgroundColor: 'rgb(255,128,0)',
    ':hover': {
        ...generalButton[':hover'],
        backgroundColor: 'rgb(255,64,0)',
    }
})