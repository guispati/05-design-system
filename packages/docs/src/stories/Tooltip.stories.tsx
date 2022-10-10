import { StoryObj, Meta } from '@storybook/react';
import { Box, Text, Tooltip, TooltipProps } from '@spati-ignite-ui/react';

export default {
	title: 'Data Display/Tooltip',
	component: Tooltip,
	args: {
		children: (
			<Box>
				<Text size="lg">26</Text>
			</Box>
		),
		content: "26 de Outubro - Disponível",
	},
	argTypes: {
		children: {
			control: {
				type: null,
			}
		},
	},
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {}