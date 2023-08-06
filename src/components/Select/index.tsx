import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from 'components/Typography';
interface SelectItem {
  label: string;
  value: string;
}

export interface Props {
  defaultValue: string;
  selectItem: SelectItem[];
  value?: string;
  onChange?: (newValue?: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      borderRadius: '10px',
    },
    wellPaidSelect: {
      width: '100%',
      height: '36px',
      borderRadius: '10px',
      border: '1px solid #33428E',
      textTransform: 'capitalize',
    },
    selectLabel: {
      marginBottom: '2px',
    },
    customMenuItem: {
      textTransform: 'capitalize',
    },
  }),
);

const WellPaidSelect: FC<Props> = (props) => {
  const { defaultValue, selectItem, value, onChange } = props;
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
      <FormControl className={classes.formControl}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
          className={classes.wellPaidSelect}
          defaultValue={defaultValue}
          disableUnderline
        >
          {selectItem.map((item: SelectItem) => (
            <MenuItem value={item.value} className={classes.customMenuItem}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default WellPaidSelect;
