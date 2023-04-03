import { Box, IconButton } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import ClearIcon from '@mui/icons-material/Clear'

const DescFormatter = ({ desc, values }) => {
    desc = desc.replaceAll('{/u}', '')
    desc = desc.replaceAll('{u}', '')
    desc = desc.replaceAll('{/c}', '</span>')
    desc = desc.replaceAll('Affix."Static Value 0"', 'FLAT')
    desc = desc.replaceAll('|1%|', '%')
    desc = desc.replaceAll('|1|', '')
    desc = desc.replaceAll('|%x|', '%')
    desc = desc.replaceAll('|', '')
    desc = desc.replaceAll('1%+', '%+')
    desc = desc.replaceAll('Affix."Static Value 1"', 'FLAT')
    desc = desc.replaceAll('Affix."Static Value 2"', 'FLAT')
    desc = desc.replaceAll('Affix_Value_1', values ? values[0] : '')
    desc = desc.replaceAll('Affix_Value_2', values ? values[1] : '')
    desc = desc.replaceAll('Affix_Flat_Value_1', 'FLAT_VALUE')
    desc = desc.replaceAll('{c_important}', '<span style="darkcyan">')
    desc = desc.replaceAll('{c_number}', '<span style="darkblue">')
    desc = desc.replaceAll('{c_random}', '<span style="darkred">')
    desc = desc.replaceAll('{c_gold}', '<span style="darkgoldenrod">')
    while (desc.search('FloatRandomRangeWithInterval') !== -1) {
        let toReplace = desc.substring(desc.search('FloatRandomRangeWithInterval'), desc.length)
        let numbersRange = []
        for (const iterator of toReplace.matchAll(/[\d+]\.?[\d]*/g)) {
            numbersRange.push(iterator[0])

        }
        desc = desc.replace(/FloatRandomRangeWithInterval\(.*\)/, numbersRange[1] + '-' + numbersRange[2])
    }
    desc = desc.replaceAll('Round(', '')
    let domParser = new DOMParser().parseFromString(desc, 'text/html');
    let nodes = domParser.childNodes[0].childNodes[1].childNodes
    return <>
        {Object.keys(nodes).map((key) => {
            return nodes[key].nodeName === 'SPAN' ? <Typography key={key} component={'span'} color={nodes[key].attributes.style.value}>{nodes[key].innerHTML}</Typography> :
                <Typography key={key} component={'span'}>{nodes[key].data}</Typography>
        })}
    </>
}
const Aspect = ({ item, deletionHandler }) => {
    return <>
        <Card sx={{ mr: 1, mb: 1, maxWidth: 250, border: '2px solid', display: 'grid' }}>
            <CardContent sx={{ overflowWrap: 'anywhere' }}>
                <Typography variant='h6' gutterBottom color="text.primary" ><b>{String(item.leg_name).replace(/^.* /,'')}</b></Typography>
                <Typography variant='subtitle2' gutterBottom color="GrayText" >{String(item.leg_name).match(/_.*_/)[0].replace(/_/g, ' ').toUpperCase()}</Typography>
                <DescFormatter values={item.content.values as string[]} desc={item.content.desc as string}></DescFormatter>
            </CardContent>
            <CardActions sx={{ alignSelf: 'end' }} >
                <IconButton onClick={() => deletionHandler(item)}>
                    <ClearIcon />
                </IconButton>
            </CardActions>
        </Card>
    </>
}

export default Aspect