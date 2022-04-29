import CursField from './cursField'

export default ({ getCurses, getAreas, index, ...props }) => {

    const getFreeCurses = Object.keys(getCurses)
        .filter(curs => getAreas
            .every((area, i) => (area.curs != curs) || (i == index)))


    return getFreeCurses
        .map(code =>
            <CursField key={code} {...{ code, getAreas, getCurses, index, ...props }} />
        )
}