"""Capture the existing animation in Maya without saving over its source."""
import json
import traceback
from pathlib import Path
import maya.cmds as cmds
import maya.mel as mel
import maya.utils
from maya import OpenMayaUI
try:
    from PySide6 import QtCore, QtWidgets
    from shiboken6 import wrapInstance
except ImportError:
    from PySide2 import QtCore, QtWidgets
    from shiboken2 import wrapInstance
import ctypes

OUT = Path('D:/work/_tools/Ubik42.github.io/public/media/parkour-animation')
LOG = Path('D:/work/_tools/Ubik42.github.io/scripts/parkour-capture.json')

def capture():
    try:
        window = wrapInstance(int(OpenMayaUI.MQtUtil.mainWindow()), QtWidgets.QWidget)
        screens = QtWidgets.QApplication.screens()
        screen = next((s for s in screens if s != QtWidgets.QApplication.primaryScreen()), screens[0])
        area = screen.availableGeometry()
        window.setGeometry(area.x(), area.y() + area.height() // 2, area.width(), area.height() // 2)
        ctypes.windll.user32.SetWindowPos(int(window.winId()), 0, area.x(), area.y() + area.height() // 2, area.width(), area.height() // 2, 0x50)
        ctypes.windll.user32.ShowWindow(int(window.winId()), 4)
        cmds.file('D:/work/master/2/Animation/zuizhong.ma', open=True, force=True, ignoreVersion=True, executeScriptNodes=False)
        cmds.playbackOptions(min=1, max=200)
        panels = cmds.getPanel(type='modelPanel')
        panel = 'modelPanel4' if 'modelPanel4' in panels else panels[0]
        cmds.modelEditor(panel, edit=True, camera='persp1', displayAppearance='smoothShaded', displayTextures=True, nurbsCurves=True, joints=False, grid=False)
        curves = cmds.ls(type=['animCurveTA', 'animCurveTL', 'animCurveTU']) or []
        controls = sorted(set((cmds.listRelatives(cmds.ls(type='nurbsCurve'), parent=True) or [])))
        keys = sum(cmds.keyframe(c, query=True, keyframeCount=True) or 0 for c in curves)
        cmds.currentTime(75)
        cmds.select(clear=True)
        cmds.refresh(force=True)
        if not (OUT / 'controls.0200.jpg').exists():
            cmds.playblast(startTime=1, endTime=200, format='image', compression='jpg', filename=str(OUT / 'controls'), forceOverwrite=True, viewer=False, showOrnaments=True, offScreen=True, widthHeight=(1280,720), percent=100, quality=90, editorPanelName=panel)
        cmds.currentTime(75)
        animated = [c for c in controls if cmds.keyframe(c, query=True, keyframeCount=True)]
        LOG.write_text(json.dumps({'ok':True, 'controls':len(controls), 'time_curves':len(curves), 'keys':keys, 'animated_controls':animated, 'cameras':cmds.ls(type='camera')}, ensure_ascii=False, indent=2), encoding='utf-8')
        window.setGeometry(area.x(), area.y() + area.height() // 2, area.width(), area.height() // 2)
        def workspace_shot():
            try:
                cmds.refresh(force=True)
                window.screen().grabWindow(int(window.winId())).save(str(OUT / 'workspace.png'))
                cmds.select(['Character', 'Spine_Pelvis_FK', 'LeftLeg_IK_Leg', 'RightLeg_IK_Leg'], replace=True)
                graph_window = cmds.window('parkourGraphWindow', title='跑酷动画 · 控制器关键帧曲线', widthHeight=(1400,900))
                cmds.paneLayout(configuration='vertical2')
                cmds.outlinerPanel()
                graph = cmds.scriptedPanel(type='graphEditor')
                cmds.showWindow(graph_window)
                ptr = OpenMayaUI.MQtUtil.findWindow(graph_window)
                graph_widget = wrapInstance(int(ptr), QtWidgets.QWidget)
                graph_widget.setGeometry(area.x(), area.y()+area.height()//2, area.width(), area.height()//2)
                cmds.animView(graph+'GraphEd', startTime=1, endTime=200, minValue=-100, maxValue=250)
                QtCore.QTimer.singleShot(2500, lambda: graph_shot(graph_widget))
            except Exception:
                LOG.write_text(traceback.format_exc(), encoding='utf-8')
                cmds.quit(force=True)
        def graph_shot(widget):
            widget.screen().grabWindow(int(widget.winId())).save(str(OUT / 'curves.png'))
            cmds.quit(force=True)
        QtCore.QTimer.singleShot(2500, workspace_shot)
    except Exception:
        LOG.write_text(traceback.format_exc(), encoding='utf-8')
        cmds.quit(force=True)

maya.utils.executeDeferred(capture)
