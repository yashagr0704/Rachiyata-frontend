import styled from '@emotion/styled'
import { FormControl, FormHelperText } from '@mui/material'
import { Select, MenuItem } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const StyledSelect = ({ name, menuList }) => {
  const formContext = useFormContext()
  const { control } = formContext

  const { field } = useController({
    name,
    control,
    defaultValue: '',
  })

  const selectProps = {
    IconComponent: KeyboardArrowDownRoundedIcon,
    name: name,
    inputRef: field.ref,
    onBlur: field.onBlur,
    onChange: field.onChange,
    value: formContext.watch(name),
  }

  const _menuItemsMapping = (item, index) => (
    <StyledMenuItems id={index} value={item.value} key={index}>
      {item.label}
    </StyledMenuItems>
  )

  return (
    <Root variant="outlined" size="small">
      <StyledSelectPaper {...selectProps}>{menuList.map(_menuItemsMapping)}</StyledSelectPaper>
    </Root>
  )
}

const Root = styled(FormControl)`
  margin-bottom: -2.8px;
  @media (min-width: 650px) {
    .MuiInputLabel-root {
      font-size: 1rem;
    }
    .MuiInputLabel-asterisk {
      font-size: 1rem;
    }
    .MuiOutlinedInput-root {
      font-size: 1rem;
    }
  }

  .MuiOutlinedInput-root {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .MuiOutlinedInput-input {
    padding: 8.5px 14px;
  }
  .MuiSelect-select {
  }

  .MuiOutlinedInput-notchedOutline {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledSelectPaper = styled(Select)`
  font-size: 0.81rem;
`

const StyledMenuItems = styled(MenuItem)`
  font-size: 0.81rem;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
`

export default StyledSelect
