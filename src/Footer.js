import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img 
                className="footer_albumLogo"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSFRgVFhUZGBgZHBwZGBoYGBgaGBgaHBwcGRwaGBocIS4lHB8rHxwZJjgnKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHBISHzErIysxMTQ0MTQxMTQ0NDQ0NDQ0NDE0MTQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MTQ0P//AABEIAN8A4gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABIEAACAQIEAwYCBwMJBgcBAAABAgADEQQFEiEGMUETIlFhcYEHkRQyQlKhsdEjcsEVM1VigpOiwvAWQ2OSlLIlNDVzs+HxJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAAICAgMBAQAAAAAAAAABAgMRITEEEiJBUTIT/9oADAMBAAIRAxEAPwDs0RIPivPRgMOa5QvZkTSDp+uwW97HleBORMCQOW8QrWr4uiU0DCFAzlgQwdC97W7trecCfiUShxpicSDUweXPVoAkLUeqtPtNJsSikHa4O5/PaTXDPEi41H/ZvSqUm0VaVTZ0a1x6qehgWGJDcMZ0MdQFcIUBZl0ltX1WK3vYc7TOc5yMM+HQoW7ep2QIa2k2Judt+UCYmJW864jehiEw9PDtXd07QaXVLAEqfrDy8es+X+0WL/oyr/e05PSO4tMSv5xn74dqKLQapUrA2QMFKkAEi5Fj1+U1n4lroC1TAVVQbsyujkDqdI3No6qLuROZtjRh6FSseVNGf10gm0/JNao1RmdiSzEsx8WJuSfcmfpfi/GU8RlldkcaatF9BJsCdJNvXYj12nCuHshXEoSzMtiALegPWU1qZndaYxd3wrLIRPBnQsbwYmkEVCLbchykFi+FjTF+1v8A2Lf5pTPNi+q0vBr+KzLHwBj/AKPmGFfoaio3o50H5ar+0gq9LSbTf4dpF8TQA2/apudgAGBJJ6AAEk+AmrKzp+tpmVqrxbRtTqUyKtB3NNqqN3ab9NQtuPO8mMxxyUKb1XNlQFj526DzOw94Q3IlZxnEz0sLTxLYdtVRlVaWsahrBKknTsTYbec8HiLF/wBGVf72nItTJ2tMSPynF1KtPXUotRa5GhmDEAcjddt5E5lxYlDF08KVJ16Qz6hpQsSEUi25NvEc47hJb6WaJ83awJ8ATI/h/NfpdEVQpS7MLE3+qxXnYeEk6vXaUiRGbZqMO9BNJbtn7O97adr3O28lhCLLJ29REQEpXxZ/9Pb/AN2h/wDIsusr/GuSnHYOpQUgOQGpkmw1oQy38ri3vAn5QuHsMKuOzmm31Xaih8bNRZT+Bnihx3XpoExGW4v6Qo0laVNnSow2urgWIPPra/Wffh7IcS1HG1azGhiccS3cY3oAKVpAMp3Zb7kHwgaeT1cyyumuGbBriqFO4SrQdVfRckBqbfa39PM85N8L5nhcU9erSpNSxHdXEK6lKmwOnUORHOxEhsp4rxGEpLh8bgsW9Wmug1aSNWSsF2Dipe5Yi179T0vabnCuGr18ViMwq0Gw4qItKnSfaoVXfW6/ZJ5WO+0lCE4GzjF0sKFpYB6yB6pDioigkuSRY77G49ptZzmeIrYjAithGw4GIBUtURtR0kW7vLbeTfw3wz0sEqVEdG7SqdLqyNYuxB0sAbET3xfh3ergSqOwXEBnKqzBF0kamsO6PMwi+kdxBiXpZpSanRNZvozDQrKpsXa5u221hJSlnmLZgDl9RQSAT2ibAnc+0j+IK74fMaWIGHr1kGHNM9jTZ7MXY7kCw28T1m3/ALYt/R+O/wCnb9ZKP2+PFuMWhi8HUYMVU1LhVLMbrbYDnzmcfxrRWmxFKtexA10yi3Ow1MeQmxmtN6mLwLhH0jtCx0NZNSbBjaynpvJvNKWujUW19SMLWve6mJ14VsvnqqZjMqZMuo02sxOoEAjT+11G1+RAuJTsMtPDBAQVWwvpVm2tuTadKyXAmplyUqiMraCpV1KupBYDY7jpbylXw+UJXDJUuNJvpJIBt0YDn12nn/K8b7vqvQ+LZ/z6nuNCrm+Hqpai+s8uRHzBEiM3amqFmYD/AF4SSy/g5KVR3UkLdiACep5XPQSscU5cn00UizBAoNietpjiZ1vqXw6PtZnr9qfj3ViSlyPE7TQBtLpmnD6NdwQgAubcjtsAOQlcyzK6mJqCnTVmJNu6rNbzsoJ//RPRxrOp4cPLjWb5dm+EeSLUyyoKm6Yh2sD0CgKGHnqB/wCWSOX0q+LqJgq/83hGvWN/54A/sQfIgXPjLnk+WJhKFOhTFkpqFHibcyfMm5kTkmHdcdjXKsFfstDFSFeym+ljs1vKXZNX4hm2HokLcjEUiB4karCfb+XsZ/Rz/wB4kxx9SdqFPRTeoVr03KorO2lb3NlB8vnPP+2Lf0fjv+naRVv0nsPiWNIVKi9kdJZlYg6LXJuRtsJz2jQTF4PE12dVq1nNSndlDKKRsgsTcbKR6GTuf5jVxWC008PXR67iiVem6uik2Z3AHdUi+523m/R4NwQUA4dGIABYg3NtrneRZatmzM7v9bmR5iMThUq9WTvW6MBZh8wZUeE81xNPDhKeEaqoZ7OKiKDdzfY77SW4Ywj4apisNoYUtRqUG0to0sN0VrW2Ntr35za4GoMmEVXVlbW50srK27G2zAGR1b0v3nMvjvzEHm2YV61fBithmogVwVJdW1G1rWE6CJWeKcO7VcGVVmC1wzFVLBRa12sNh5mWeTJZaryalznqde2YiJZkTBEzEDAEWmYgYtFpmIHkLMkTMQPOmZtMzEDGmLTMQNTE4tKdtbqt721MBe3O1+f/ANyk5hiENZ3psGVjzG4vYXEl+N8v7Smj2/m2N/JWsCfYhZSMuPZggjYk3tbxO84vlX7fi6vj5n+onu0aodyFQEXJvufYG05/x+F7dqocB1tpP3rWAAHhLW2JfUaf2eSnUFFj1JIM57xrgyrljT62L9oHuT02/SYfGxZry35b1m2PGd5yKmHTTsW+sPA9ZffgPlzBcRiCLKdNND4kXZ/8g9px+gA7KGay3ANhcgE2JtP0pwVmGCFFcPhX2pgbN3WYnmxvzJN72no5zMzqOLk5Lu91bAIAgGZl2bBEWmYgedMaZ6iB50wFnqIHkrMzMQEREBERAREQEREBERAREQERED41aQdSrC4IIIPUHpOX4/LXohiR3Gd9BuTyYix8/wBZ1UyKXBpVpMjC66n9b6ibg9DMeXj+8a8XJ9K47i8U9NtQGsWsUJty6j/Q5SocQZkKlwKbIb9Tt8rzpHFPD1TDNrK6qW/fHQeDjofPkZC4XgCvmDhwOyoAXLndqh8EX/MbD1mXFnrXVjo5dd47zXNcHT1MPLcybo4iorAISDe9xzHhbwluzvgunhalGjq0s6k87tzIIY8idl8OZtNkcMtTFkQ782Nrnz+U6b5cKw8J/EAqi08XqZhsKlhqI/rqDv6j5To2DxtOsuqm6uvipv8APwnGRkJB5b9Z86pr4Fg6OyHyO3Pa46+8juw7dzmZV+D+JPplMagFqBdRA5ML2LL72v6y0S0SRESQiIgIiICIiAiIgIiICIiAiIgIiICIiBgzSwWzVB/XJ9bgHx9vabjTRoVFFZ1v3iqtbpp3UHlzuCPYSKNxlB2IuDBFhtPpPJ5QKhUwqVMzs6BwlAML76SzsQxv6sAJYa+XI3lIvIl1YnF1Cv21phgdrKoJHrcj5jeWBliCAq5OyksoDDw6yt8f4ENSp6B331bfuLqI9bA/KXqrUKbyA4oUVKdOsvOjVRnH9Vjoe/j3WMm+kKBlePNDF4TQbBMPrceKuw1A+2n3tO1AzgmaEHFVqifU7lCnfqLg7eWlSfQid2w31F/dH5CViX2iIlgiIgIiICIiAiIgIiIGJ8PpC6tF+9a9utrkX/Az7GUPMMaTiHqK1tJ0qR4Lt+sw5uWcclacXHd2yL7eJXcu4kR7LU7jeP2T+knqdQMAQQQeRG4Mvjkzudyq7xrN6sfWJ8a9yrBTY2Nj4G209rsBeaKvcREDBkTUFsWp371JgfA6XFh/iPzksZE4/avhz0JdT5AoW8epUDrIolhMNMiaWbVtFGo24srWtzvawt7xRHcJp+xL7jtXepZr7Bm7oG/LSB4eknWmpldDs6SJ91VH4ee/zm00QRmcVdCMfKcxfP6lQ4heaupQgnZQwsTfyNiDLfxnmopoy335TkzYixYDfxA/iTyEi3wr+0tVqLpFzsoNrDkTYGo/hsAoHgCes6/wrje3wtKpfmtj6qSv8JxAsxS1wF+s5+8BayjynTvhLizUwTKeaVXHswV/zZvlEWXqJiZlgiIgIiICIiAiIgIiIGnmeI7Ok7/dUkevT8ZzV3sPWXviwn6M9vFR/iEoNTe/lPP+Ze9SO/4knVr41a9pr/y09H6lRk9DsfblNLM9du6QD53mOAsOtfGgYplVUXVTU7Co9xYXNuQubdb+spw8Xd7lbcu5nPVnbrfDa1uwVq7FnbvWIA0g8l2625+smZ5XlPU9KTqPLt7vbMRElBIzNaZJpED6tRT7EFTfblYn3AknNDNqwp0y5F9JB8udt/LeRRvCRWegmloBtrZV6ciRq5gjkCZI0b2F+dhf16zSxalqlNRawLMSfIaBbfmdZ6W2PlFSkFE8u1hMgzBF5KHHOOMYtSq9RW7oBFvArtv7ypYBCwBL89yDvz95YOJMnepj3wYNu1csl+RVgWH5Ee05jiabU3ZCSCrFSLkEWNpWTtHTrDZVTShreoq3He1OFAHPrLB8JsSjfSERlZVKE6TexOoe/rOFPSutzubdZ0L4GY/RjKlE8qtMkfvIb2H9lmPtEq1z074JmYEzLIIiICIiAiIgIiICIiBF5/hjUoOqi7WuB4kG/wDCc3L9DsROtESs59wytUl6dlfqOjfoZy/I4bvzHT8flmL1fSi1LHpIXHUQ1wRJnG4Z6TFXUqfMW+XjI6sl5yZlzfL0ZZqf1M8N8cVMLanidVSlsA/N0HLvfeX8Z1LCYlKqB6bBkYXVlNwR5GcOajq2Mvvwu7tOtT+64YDwDC23up+c7eLl+1+tcHyOGZ/KL7EwJmdDkYkbn6asPUA56SRbxXvD2uBJKfDFLdWHiDz3HLqIGMvrirSRxydVYf2gD/GR4TXiySuyUgAb/adiSLW8E8evKeuGv/LUh4KVsOlmIt7Wt7TzlR11K9S9wX0LtsAiqrAG5v3geg6yBLATJmZi8kQOZ5dTbE0MWR3qRZCfAOCgJ8bFvkx8Jxn4z5GMNjVrKLJiAX/tqQH/ADU+86VxDmZoVHRj3KikAjmrDkR58pH8d4T+Usn7dltVor2vXYp3ag8gRc+w8JEO3Hgi6B5ibfw6r9jmeFY7d8ofR1ZD+DTTyKkajC/IT649vo2Jp1V+w61Nv6rA/wAJnnXWvq31jvP2fqgGZnyo1A6hhyYAj0IvPrNWBERAREQEREBERAREQExMxA08dgKdZdNRQw8+noekp2bcFsLth2uPuMd/QN195e4tKa4869r45NZ9VxbEUWpsUdCrdQRb/XtLV8Pq4FWog+0oPupt/mMuePy6nXXTUQMPMbj0PMSFy3hVcLiBWpu2mxDI2+xH2WHnbmPeYZ4LnU1HRr5E3i517WcTMwJmdTkJ5aepgwILKm7Gg4bbs2qjrawYkW3Jsb7es2OHl/YKeZa7E2IuWJJI1b29ZHZ65opUCjVrYErdbnUbFQOZuL9DzlipchfY2FxKwfSeKlrbz6TywlhzHjak9JtTHVTY91rC6nwO3KSOGra8jxL89VDE/wDa4mh8QarBey5gnUL/AKSIy/iCnTyjFYQkrVSlVFmtZtZIsD42bkZX9kincOYW1MHx3/jI3ildwZZMop6aKegla4lqXYic2Nd8lejyZmeGR+ieBsX22X4V73PYopPiyqEJ+amWCVD4WD/wvDfut/3tLfOt5xERAREQEREBERAREQEREBERATEzEBERAwZpZhiezWw3Y7KCbAk7AX6b/gDN0zRzLB9oBbZgQQfMG4/G3tcdZF9CMq4JHGpkJcMqqbD6+3eXmVAJO97jSfObWRY81ldW+tTfQxHI7Bgfkd/MGaOHpVUADhu67Mugsb3LE6if3j5D2kjlGWCjrY/XqNqbwFgAFA8ABIntKR1TJMzMyyEBnOVU2PaMgZgLb6jtz2F5yHjTNVqCvQp0dIQs1Q00FgytpLOw89p3srOf8S0Ppz1sNTISkoLYh1FgzgEkMRz2Ft5Wpz7UHLm//nRjsSo/KU7iNv2nrvLXQOjDpfoq/K3OUvNKmtxbc8vXfa05+Kfna7/ka645H6T+HNPTlmEH/CB/5iW/jLRIzIMH9Hw1Cjz7OlTS/jpUAn+PvJOdTzyIiAiIgIiICIiAiIgIiICIiAmJmYMAJmYEzATydp6mIC0xHKZvARF54Lb2gR2eY00qR071HISmPF22B9BuT6SicUUjTwoweHaxqaxVcfWqaVLVWvz0XBBPUtboZZcwqiviDZrUsOrGo4Oyki7Kp+9pAF+gJ6zQw+H7dKuIsqtUTssOhNuzojrboWvf5TPVrTE8ucZs4SlyFgtrdLWtKxwRl/0rMMNS3K9oGP7qXc/gsmuMUampRtjzHgR5eI5/KSfwKwevGVap/wB3SsPV2Av8lI95Tgz1La3+VruyR3kCepgTM3chERAREQEREBERAREQEREBERATy09Tw7WBgcdzz4s18JjK1EUadSnTcqLllaw594XHPylz4d41ONotUTDMHUXKCopvtfZiB+InIeIuDsRVxFWqjI4d2cC7Kx1G9gCLE7+Ms3AVdKNNlq1zRqIdqbMoDi1iGDDvC/KxiyxE1KsVT4oLTdlqYOqgUd5gymxPIcrHkeR6SycP8Z4PHAdlXUOf925C1PPunmPMXE4lxBmNu2IP1yVUi+1h1977+cptLEMh2I2sRsDY+Ivy9og/YV55I8J+aMt48xNG2ivVW3S4dT/Ze4A9rzb4k4zxOJWmxxDqo1KeyPZ3Nge8ARc3vvJ6O36AqY9E16mChACxba1/G/n+cpeacTt3xTJUMSFc9EAsugdCdzczkdHPcTTWzYnWt7EMzue71JI3ANpG4zPcQ7X7U8/s90fIgflMuTOr/mteLWc3vU7X4u7JpLMUv9XU2nc3J03te+880H7MhlNiPD/X+tp9H1U6ah/rELq/eI3lezPNtGoDpf5zhn21fD1beOZ7sW3E1cNicLVfEBW7PZVvYhjcBr3vvz6X3G83fgxlS0jiKiliHCLZgOhY3uPUTm3DFV8RihQFr4hlQsTbRY6tQ6GwB2I395+iOHclXBUVpKxa3Nm5kn8uc7sSyPK5LLb0mBMzAmZozIiICIiAiIgIiICIiAiIgIiIGJE8RYwUqLHVYt3R+JP4AyWnNPixmopdil97M1tRHOy72BvyMme0X0jMwzFlW4rpb+uvLxBKiUvOcWynW+jUy9zSWIYEAAkEAjTz9SOc1sTjnfSVUbctjb8dvwkdiMPVqEs/zJ8r/ltL29sszrzUdVr3XSFABtvc3tubeHP8prPSIkgcLpPTa/UTxV2BFx+Ep007R4BkrluSVa4DKulL27Ru6l/AH7R6bX/jNXAVVSrTd0DorqzoeTqrAsp8iLj3naa+Bp4x0dW7jIDTpp3VIAJ2VTbZdIsOgv4ymtfWLzy5hiMB2CjQSXBvrI3sNu7+J/WfLhjKzVxKgju0zrcnkAu4v5E29d5cs1wCUQ3aG32VXa7nlpQ3uTc25D1kJjceMNTNNB+0qfXtz5WVfOwsPMzK7tnU91txYl831GxxDmpqVgtPvaefl0ufmZTcXiC1wed9/nJzGMcNSFO961QhnP3fBfaaWVZBVxtVqNHSWUamLMFHOxPn7SePEjTm3a+vAVTTmGFP/FT8Tb+M/VAn5U4WTs8xw6mxK4hFNuVw4G0/VYmzkZiIgIiICIiAiIgIiICIiAiIgIiIGDOKfE+oKmOKltqaILD62ogtb5MJ2szhfF+Cq1MdiGAO7kXuu4VQB18B+Etn2rr0rbBzyWx9bn858auFexJ8DzaTdHK6nMU/HdmU+Ftr+E18dk9Ug3A6dV9fGWrOKzVpEdV+f6TTxFTkLyWr5TUG2jp4r0FvvSKbLqn3P8S/rK1pGo7eEt2UcWvgqHYIiOSNmckhS12I0dR3vLf1lbTLqhIGjqPtL+s3BltQszFNlv1T0G1/SVs7Sksuxz4h3qVHL4hR+xQg2F+ekDZQPyE99rToEszGriegAJVfTpfzkbgziKT9pTXSbFeakEEWNwTv0+U+mCFan2n7LU7iwcsupeeojfrf8Jncd1vjlkz1Wli3ZW1swLtc2vfTfqfAzXbVSsbsr87gkEDyI33m7/IGIO+nf95P1jMMvru2p1GogcivTbxl5Omd1L2+vBoLY/C+PbUz62YE3+U/Von5g4CwLjMcKSuwqAndeXzn6fkqsxEQEREBERAREQP/2Q=="
                 alt="" />
                 <div className="footer_songInfo">
                     <h4>Yeah!</h4>
                     <p>Usher</p>
                 </div>
            </div> 

        <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousIcon className="footer_icon"/>
            <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
            <SkipNextIcon className="footer_icon" />
            <RepeatIcon className="footer_green" />
        </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
