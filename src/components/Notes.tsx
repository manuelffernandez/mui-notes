import { Typography, Stack, Button, Container } from '@mui/material';

const Notes = (): JSX.Element => {
  return (
    <>
      <Typography
        component='h1'
        variant='h3'
        align='center'
        color='textSecondary'>
        Notes
      </Typography>
      <Container>
        <Stack spacing={2}>
          <Button variant='text'>Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button type='submit'>Submit</Button>
        </Stack>
      </Container>
    </>
  );
};

export default Notes;
