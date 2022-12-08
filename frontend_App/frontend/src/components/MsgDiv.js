
export default function MsgDiv(props) {

    const styles = {
        color: 'red',
        textAlign: 'center',
        padding: '0.5rem',
        margin: '0.6rem',
        borderRadius: '.5rem',
        display: 'block',
        backgroundColor: props.success ? '#c3f7d8' : '#ffdcdc',
        color: props.success ? 'green' : 'red',        
    }

    return (
        <div style={styles}>
            {props.msg}
        </div>
    );
}