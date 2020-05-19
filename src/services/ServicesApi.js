import axios from 'axios';

export const getAllNewElements = (props) => {
    axios.get(`https://api.jsonbin.io/b/5eb19b6da47fdd6af15e02a8/5`)
        .then(res => {
            const props = res.data;
            this.setState({ props });
        });
};
