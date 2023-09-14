import styled from '@emotion/styled'

import { useController, useFormContext } from 'react-hook-form'
import { Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'

const StyledRatingField = ({ name, label, rules, required, Icon, ...props }) => {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: required,
      ...rules,
    },
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const rootProps = {
    size: 'large',
    error: isError ? isError : undefined,
    label: label,
    color: 'primary',
    required: required || Boolean(rules?.required),
    ...field,
    value: formContext.watch(name),
    precision: 0.5,
    ...props,
  }
  return (
    <Root>
      <Label variant="subtitle2" color="secondary">
        {label}
      </Label>

      <Rating
        {...rootProps}
        sx={{ color: theme => theme.palette.primary.main }}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
`

const Label = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
`

// export const StyledRatingFieldRoot = styled(TextField)`
//   .MuiInputBase-input {
//     box-shadow: black !important;
//     -webkit-box-shadow: black !important;
//   }

//   .MuiInputLabel-root {
//     font-size: 1rem;
//     line-height: 0.9;
//     margin-top: -2px;
//     margin-left: -2px;
//   }

//   .MuiInputLabel-asterisk {
//     font-size: 0.84rem;
//     line-height: 1.445;
//   }
//   .MuiOutlinedInput-root {
//     font-size: 0.81rem;
//   }
//   .MuiOutlinedInput-input {
//     padding-inline: 14px;
//     padding-block: 12px;
//     /* padding: 8.5px 14px; */
//     -webkit-autofill {
//       box-shadow: none;
//       -webkit-box-shadow: none;
//       -webkit-text-fill-color: none;
//     }
//   }
//   .MuiFilledInput-underline {
//     background-color: rgb(255 255 255 / 4%);
//   }

//   .MuiFilledInput-underline::before {
//     border-bottom: 2px solid rgb(255 255 255 / 0%);
//   }
//   .MuiFilledInput-underline::after {
//     border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
//   }
// `

export default StyledRatingField
