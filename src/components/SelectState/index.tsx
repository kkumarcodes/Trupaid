import React, { FC } from 'react';
import { States } from './states';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from 'components/Typography';

export interface Props {
  selectLabel: string;
  defaultValue: string;
  onChange?: (newValue?: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      borderRadius: '10px',
      background: '#F4F4F4',
    },
    select: {
      width: '100%',
      height: '60px',
      borderRadius: '10px',
      backgroundColor: '#F4F4F4',
      [theme.breakpoints.down('md')]: {
        height: 60,
        fontSize: 16,
      },
      [theme.breakpoints.down('xs')]: {
        height: 52,
      },
    },
    selectLabel: {
      marginBottom: '2px',
    },
  }),
);

const SelectState: FC<Props> = (props) => {
  const { selectLabel, defaultValue, onChange } = props;
  const classes = useStyles();
  const [userState, setUserState] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUserState(event.target.value as string);
    if (onChange) onChange(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Typography className={classes.selectLabel}>{selectLabel}</Typography>
      <FormControl className={classes.formControl}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={userState}
          onChange={handleChange}
          className={classes.select}
          defaultValue={defaultValue}
          disableUnderline
        >
          {States.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectState;
