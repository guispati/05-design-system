import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
	title: 'Typhography/Text',
	component: Text,
	args: {
		size: 'md',
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum provident in quis tempora ratione accusamus rem sequi voluptate sunt, autem, repellat hic dolore molestiae quod. Nostrum facere quasi esse molestias.',
	},
	argTypes: {
		size: {
			options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
			control: {
				type: 'inline-radio',
			},
		},
	}
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
}