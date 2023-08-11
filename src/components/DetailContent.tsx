/* eslint-disable no-use-before-define */
import React, { useEffect, useState, FC } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

// import Button from '@material-ui/core/Button';
import Button from './Button';
import Link from './Link';
import MuiAutocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import UserConnection from './UserConnection';
import userAvatar from '../assets/images/profile/avatar.png';
import MoreOptionDialog from './MoreOptionDialog';
import Grid from '@material-ui/core/Grid';
import Typography from './Typography';
import Input from './Input';

import {
  getConnections,
  Connections,
  newConnection,
} from '../store/connectionSlice';
import { addNewConnection } from '../types/request/addNewConnection';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/store';

const useStyles = makeStyles(() => ({
  accordionDetailContainer: {
    padding: '15px 45px',
  },
  moreOptionButtonContainer: {
    display: 'flex',
    marginTop: '40px',
  },
  confirmButton: {
    marginLeft: '25px',
  },
  customAutoCompleteRoot: {
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    border: 0,
  },
  customAutoCompleteInputRoot: {
    borderRadius: '10px',
    border: 0,
  },
  addNewConnectionDialog: {
    width: '340px',
    borderRadius: '10px',
  },
  customDialogContentRoot: {
    padding: '0 20px',
  },
  nameInputContainer: {
    marginBottom: '15px',
  },
  userConnectionContainer: {
    marginTop: '10px',
  },
  phoneInputContainer: {
    marginTop: '4px',
  },
  orTextContainer: {
    marginTop: '8px',
  },
  addConnectionButtonContainer: {
    marginTop: '30px',
    marginBottom: '15px',
    paddingRight: '10px',
  },
  addNewConBtn: {
    height: '30px !important',
    padding: '6px 23px',
  },
  addConnectionButton: {
    marginLeft: '25px',
  },
}));

export interface MenuItemProp {
  inputValue?: string;
  preferredName: string;
  receiver?: string;
  id?: number;
}
interface Props {
  moreOptionsbillAmount: number;
  billTitle: string;
  nextDate: string;
  selected: MenuItemProp[];
  setSelected: (item: MenuItemProp[]) => void;
  splitAmount: any;
  setSplitAmount: (amount: any) => void;
  splitTypeValue: string;
  setSplitTypeValue: (type: string) => void;
}

const filter = createFilterOptions<MenuItemProp>();

const initialForm: addNewConnection = {
  preferredName: '',
  phone: '',
  email: '',
};

const DetailContent: FC<Props> = (props) => {
  const {
    moreOptionsbillAmount,
    billTitle,
    nextDate,
    selected,
    setSelected,
    splitAmount,
    setSplitAmount,
    splitTypeValue,
    setSplitTypeValue,
  } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<MenuItemProp | null>(null);
  const [addNewDialogOpen, toggleOpen] = useState(false);
  const [moreOptionDialog, showMoreOptionDialog] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [disableSubmission, setdisableSubmission] = useState<any>({
    preferredName: true,
    phone: true,
    email: true,
  });

  const calcRequest = () => {
    let requestAmount = 0;

    if (selected) {
      selected.forEach((item) => {
        requestAmount += splitAmount[item.id!!];
      });
    }

    return moreOptionsbillAmount - requestAmount;
  };

  const calcPercentage = (value: number) => {
    let percentage = 0;

    if (selected) {
      percentage = Math.round((value * 100) / moreOptionsbillAmount);
    }

    return percentage;
  };

  const handleClose = () => {
    setDialogValue({
      preferredName: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    preferredName: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      preferredName: dialogValue.preferredName,
    });
    dispatch(
      newConnection({
        ...form,
        phone: disableSubmission.phone ? undefined : form.phone,
        email: disableSubmission.email ? undefined : form.email,
      }),
    );
    handleClose();
  };

  const autoCompleteHandleChange = (event: any, newValue: any) => {
    if (typeof newValue === 'string') {
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        toggleOpen(true);
        setDialogValue({
          preferredName: newValue,
        });
      });
    } else if (newValue && newValue.inputValue) {
      toggleOpen(true);
      setDialogValue({
        preferredName: newValue.inputValue,
      });
      setForm({ ...form, preferredName: newValue.inputValue });
      setdisableSubmission({ preferredName: false, phone: true, email: true });
    } else {
      setValue(newValue);
      if (newValue) {
        const select = selected.find((item) => item.id === newValue.id);
        if (!select) {
          const newSelected = [newValue, ...selected];
          if (!splitTypeValue || splitTypeValue === 'even') {
            let billAmount: any = {};
            newSelected.forEach((item) => {
              billAmount[item.id!!] =
                moreOptionsbillAmount / (newSelected.length + 1);
            });
            setSplitAmount(billAmount);
          } else {
            setSplitAmount({ ...splitAmount, [newValue.id]: 0 });
          }

          setSelected(newSelected);
          setValue(null);
        }
      }
    }
  };

  const handleChange = (prop: string, value: any) => {
    if (prop === 'phone') {
      value = value.replace('(', '');
      value = value.replace(')', '');
      value = value.replace(' ', '');
      value = value.replace('-', '');
      value = '+1' + value;
    }
    setForm({ ...form, [prop]: value });
  };

  const handleError = (name: string, error: boolean) => {
    const submission = { ...disableSubmission, [name]: error };
    let errorSubmission = false;
    Object.keys(submission).forEach((item: any) => {
      if (submission[item]) {
        errorSubmission = submission[item];
      }
    });
    setError(errorSubmission);
    setdisableSubmission(submission);
  };

  const isDisabled = () => {
    if (
      disableSubmission.preferredName ||
      (disableSubmission.email && disableSubmission.phone)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const openMoreOptionDialog = () => {
    showMoreOptionDialog(true);
  };

  const connections = useSelector(Connections);

  useEffect(() => {
    dispatch(getConnections());
  }, []);

  return (
    <>
      <Grid container className={classes.accordionDetailContainer}>
        <Grid item xs={12}>
          <MuiAutocomplete
            placeholder="Name, Phone, Email or @username"
            fullWidth={true}
            value={value}
            onChange={autoCompleteHandleChange}
            filterOptions={(options: MenuItemProp[], params) => {
              const filtered = options.filter((item) =>
                (item.preferredName + item.receiver)
                  .toLowerCase()
                  .includes(params.inputValue),
              );

              if (params.inputValue !== '') {
                filtered.push({
                  inputValue: params.inputValue,
                  preferredName: `Add "${params.inputValue}"`,
                });
              }

              return filtered;
            }}
            id="free-solo-dialog-demo"
            options={connections.filter(
              (item: any) =>
                selected
                  .map((selectedItem) => selectedItem.id)
                  .indexOf(item.id) === -1,
            )}
            getOptionLabel={(option) => {
              // e.g value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.preferredName;
            }}
            selectOnFocus
            handleHomeEndKeys
            renderOption={(option) => option.preferredName}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Name, Phone, Email or @username"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography variant="listItem1">To:</Typography>{' '}
                    </InputAdornment>
                  ),
                }}
              />
            )}
            classes={{
              root: classes.customAutoCompleteRoot,
              inputRoot: classes.customAutoCompleteInputRoot,
            }}
          />
        </Grid>

        <Grid container className={classes.userConnectionContainer}>
          <Grid item xs={12}>
            {selected.map((item) => (
              <UserConnection
                userAvatar={userAvatar}
                userName={item.preferredName}
                userAlias={item.preferredName}
                billAmount={splitAmount[item.id!!]}
                percentage={calcPercentage(splitAmount[item.id!!])}
                onDelete={() =>
                  setSelected(
                    selected.filter((filterItem) => filterItem.id !== item.id),
                  )
                }
                splitType={splitTypeValue}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          justify="flex-end"
          alignItems="center"
          className={classes.moreOptionButtonContainer}
        >
          <Grid>
            <Link onClick={openMoreOptionDialog}>More Options</Link>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={addNewDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paperWidthSm: classes.addNewConnectionDialog,
        }}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">
            <Typography variant="codeValue">Add a New Connection</Typography>
          </DialogTitle>
          <DialogContent classes={{ root: classes.customDialogContentRoot }}>
            <DialogContentText>
              Invite with a phone number or email
            </DialogContentText>
            <Grid container className={classes.nameInputContainer}>
              <Grid item xs={12}>
                <Input
                  type="text"
                  disableUnderline={true}
                  fullWidth={true}
                  placeholder="Name"
                  value={form.preferredName}
                  onChange={(value, error) => {
                    handleChange('preferredName', value);
                    handleError('preferredName', error);
                  }}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.phoneInputContainer}>
              <Grid item xs={12}>
                <Input
                  isRequired={false}
                  type="phone"
                  disableUnderline={true}
                  fullWidth={true}
                  placeholder="Phone number"
                  onChange={(value, error) => {
                    handleChange('phone', value);
                    handleError('phone', error);
                  }}
                />
              </Grid>
              <Grid item xs={12} className={classes.orTextContainer}>
                <Typography variant="listItem1">or</Typography>
              </Grid>
              <Grid item xs={12}>
                <Input
                  isRequired={false}
                  type="email"
                  placeholder="Email address"
                  disableUnderline={true}
                  fullWidth={true}
                  onChange={(value, error) => {
                    handleChange('email', value);
                    handleError('email', error);
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid
              container
              className={classes.addConnectionButtonContainer}
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Link onClick={handleClose}>Cancel</Link>
              </Grid>
              <Grid item className={classes.addConnectionButton}>
                <Button
                  type="submit"
                  size="small"
                  disabled={isDisabled()}
                  className={classes.addNewConBtn}
                  customPadding={true}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
      {moreOptionDialog && (
        <MoreOptionDialog
          billTitle={billTitle}
          nextDate={nextDate}
          moreOptionBillAmount={moreOptionsbillAmount}
          moreOptionDialogOpen={moreOptionDialog}
          selectedUsers={selected}
          handleClose={() => showMoreOptionDialog(false)}
          splitAmount={splitAmount}
          setSplitAmount={setSplitAmount}
          splitTypeValue={splitTypeValue || 'even'}
          setSplitTypeValue={setSplitTypeValue}
        />
      )}
    </>
  );
};

export default DetailContent;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
