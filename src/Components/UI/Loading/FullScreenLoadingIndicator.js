import {Box, CircularProgress} from "@material-ui/core";

const FullScreenLoadingIndicator = () => (
    <Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <CircularProgress/>
    </Box>
);

export default FullScreenLoadingIndicator;