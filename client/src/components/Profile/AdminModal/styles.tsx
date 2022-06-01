import styled from 'styled-components'

export const customModalStyle = {
    content: {
        width: '450px',
        height: 'fit-content',
        maxHeight: '95vh',
        top: '50%',
        left: '50%',
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        padding: 0,
    },
}

export const AdminModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`
