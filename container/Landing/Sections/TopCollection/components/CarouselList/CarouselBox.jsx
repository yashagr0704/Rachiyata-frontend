import styled from '@emotion/styled'

import { useCallback } from 'react'
import { IconButton, useTheme } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const CarouselBox = ({ messages, isError, pageState, msgIndex }) => {
  const theme = useTheme()
  const [[page, direction], setPage] = pageState

  const paginate = useCallback(
    newDirection => {
      setPage([page + newDirection, newDirection])
    },
    [page, setPage],
  )

  const handleJumpToSelectedPage = index => {
    if (index < msgIndex) {
      setPage([index, -1])
    } else if (index > msgIndex) {
      setPage([index, 1])
    }
  }

  //   useEffect(() => {
  //     handleJumpToSelectedPage(activeLayoutIndex)
  //   }, [activeLayoutIndex])

  return (
    <Root error={isError ? 'true' : 'false'}>
      <Hidable>{messages[msgIndex]}</Hidable>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="display"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}>
          <main>{messages[msgIndex]}</main>
        </motion.div>
      </AnimatePresence>
      <ShowBarContainer
        style={{
          'grid-template-columns': `repeat(${messages.length},auto)`,
        }}>
        {messages.map((_, index) => (
          <ShowBar
            key={index}
            style={{
              background: msgIndex === index ? theme.palette.primary.main : theme.palette.primary.main + '99',
            }}
            animate={{
              width: msgIndex === index ? 50 : 20,
              background: msgIndex === index ? theme.palette.primary.main : theme.palette.primary.main + '99',
            }}
            transition={{
              width: { type: 'spring', stiffness: 900, damping: 25 },
              duration: 0.25,
            }}
            onClick={e => {
              if (index < msgIndex) {
                setPage([index, -1])
              } else if (index > msgIndex) {
                setPage([index, 1])
              }
            }}
            error={isError ? 'true' : 'false'}
          />
        ))}
      </ShowBarContainer>
      <IconButton
        className="next"
        onClick={() => {
          paginate(1)
        }}>
        <KeyboardArrowRightRoundedIcon color="primary" />
      </IconButton>
      <IconButton
        className="prev"
        onClick={() => {
          paginate(-1)
        }}>
        <KeyboardArrowLeftRoundedIcon color="primary" />
      </IconButton>
    </Root>
  )
}

export default CarouselBox

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle__viewBtn {
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 100;
    height: 32px;
    width: 32px;
  }

  .next,
  .prev {
    top: calc(50% - 22px);
    width: 38px;
    height: 38px;
    position: absolute;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    z-index: 2;
  }

  .next {
    right: 15px;
  }

  .prev {
    left: 15px;
  }
  @media (max-width: 550px) {
    .next {
      right: -13px;
    }

    .prev {
      left: -13px;
    }
  }

  @media (max-width: 422px) {
    .next {
      right: -23px;
    }

    .prev {
      left: -23px;
    }
  }
  .display {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    padding: 5px;
    border-radius: 8px;
    background-repeat: space;
    background-size: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  small {
    position: absolute;
    top: 5px;
    left: 9px;
    text-align: left;
    font-size: 0.85rem;
    font-weight: 700;
    color: #dcb6b6;
  }
`

export const ShowBarContainer = styled.div`
  height: 5px;
  z-index: 10;
  position: absolute;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  bottom: -35px;
  right: 50%;
  left: 50%;
  display: grid;
  grid-template-rows: 1fr;
  gap: 4px 7px;
  justify-content: center;
  justify-items: center;
  background: ${({ theme }) => theme.palette.primary.main};
`

export const ShowBar = styled(motion.div)`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 5px;
  z-index: 10;
  border-radius: 5px;
`

export const Hidable = styled.div`
  opacity: 0;
`
