import styled from 'styled-components'

export const customModalStyle = {
    content: {
        width: '450px',
        height: 'fit-content',
        top: '45%',
        left: '50%',
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        padding: 0,
    },
}

const AdminModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`

export default AdminModalComponent
