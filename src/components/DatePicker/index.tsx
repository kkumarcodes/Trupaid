import React, { FC } from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

interface Props {}

const useStyles = makeStyles((theme) => ({
  customDatePicker: {
    borderRadius: '10px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      paddingRight: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: '8px 10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3342BE',
    },
  },
}));

const WellPaidDatePicker: FC<Props> = (props) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label=""
          inputVariant="outlined"
          disableFuture={true}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.customDatePicker}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default WellPaidDatePicker;
