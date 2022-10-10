import * as Toast from '@radix-ui/react-toast';
import { styled, keyframes, css } from "../../styles";

const slideRight = keyframes({
	from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
	to: { transform: 'translateX(100%)' },
});

const fadeIn = keyframes({
	from: {
	  	opacity: 0,
	},
	to: {
	  	opacity: 1,
	},
});
  
const fadeOut = keyframes({
	from: {
		opacity: 1,
	},
	to: {
		opacity: 0,
	},
});

export const ToastProvider = styled(Toast.Provider, {});

export const ToastContainer = styled(Toast.Root, {
	background: '$gray800',
	border: '1px solid $gray600',
	borderRadius: '$sm',
	padding: '$3 $5',
	width: '$80',
	
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '$1',
	position: 'relative',

	'&[data-swipe="move"]': {
		transform: 'translateX(var(--radix-toast-swipe-move-x))',
	},
	'&[data-swipe="cancel"]': {
		ansform: 'translateX(0)',
		transition: 'transform 200ms ease-out',
	},
	'&[data-swipe="end"]': {
		animation: `${slideRight} 100ms ease-out`,
	},
	'&[data-state="closed"]': {
		animation: `${fadeOut} 200ms ease-out`,
  	},
	'&[data-state="open"]': {
		animation: `${fadeIn} 200ms ease-out`,
  	},
});

export const ToastTitle = styled(Toast.Title, {
	color: '$white',
});

export const ToastDescription = styled(Toast.Description, {
	color: '$gray200',
});

export const ToastClose = styled(Toast.Close, {
	all: 'unset',
	position: 'absolute',
	right: '$4',
	top: '$4',

	cursor: 'pointer',
	color: '$gray200',
});

export const ToastViewport = styled(Toast.Viewport, {
	position: 'fixed',
	bottom: '$8',
	right: '$8',
	zIndex: '1000',
});